import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const perplexity = new OpenAI({
  apiKey: process.env.PERPLEXITY_API_KEY || '',
  baseURL: 'https://api.perplexity.ai',
})

function buildPrompt(prompt: string): [{ role: 'user'; content: string }] {
  return [
    {
      role: 'user',
      content: prompt,
    },
  ]
}

async function generateCustomTransform(transform: string) {
  try {
    const prompt = `Actúa como un generador de instrucciones de transformación de imágenes de Halloween. Las transformaciones que realices deben ser aterradoras y estar relacionadas con temas de terror. A continuación te doy una descripción de la transformación que quiero realizar, y necesito que me devuelvas un objeto JSON con la estructura siguiente:

    - Cambiar fondo: { replaceBackground: "Descripción del nuevo fondo (máximo 6 palabras en inglés, debe ser aterrador)" }
    - Poner una máscara: { replace: { from: "face", to: "nombre_máscara (debe terminar con la palabra 'mask' y ser un elemento aterrador)", preserveGeometry: true } }
    - Convertir en zombi: { replace: { from: "person", to: "específica transformación de terror en inglés", preserveGeometry: true } }
  
  Reglas:
  1. Las transformaciones deben ser temáticas de Halloween y dar miedo.
  2. Todo el contenido debe estar en inglés.
  3. Si es una transformación de cara (face), el valor de 'to' debe terminar siempre con la palabra 'mask' y estar relacionado con algo aterrador.
  4. Si es convertir a una persona (person), la transformación debe ser específica y relacionada con el terror.
  5. La descripción para reemplazar el fondo (replaceBackground) debe ser aterradora y no debe tener más de 6 palabras.
  
  Genera exclusivamente un objeto JSON que siga la estructura dada, sin agregar explicaciones ni texto adicional. Solo devuelve el JSON.
  
  Solicitud de transformación: ${transform}
  
  Solo devuelve el JSON.`

    const query = {
      model: 'llama-3.1-70b-instruct',
      messages: buildPrompt(prompt),
      max_tokens: 1000,
      temperature: 0.75,
      frequency_penalty: 1,
    } as const

    const response = await perplexity.chat.completions.create(query)

    if (
      !response ||
      !response.choices ||
      !response.choices[0]?.message?.content
    ) {
      throw new Error('Invalid response structure from Perplexity')
    }

    const textResponse = response.choices[0].message.content

    if (!textResponse) return null

    let jsonResponse
    try {
      jsonResponse = JSON.parse(textResponse)
    } catch {
      console.error(
        'Failed to parse JSON response, attempting to extract object'
      )

      // Intenta extraer el objeto entre llaves
      jsonResponse = extractObjectFromText(textResponse)

      if (!jsonResponse) {
        throw new Error('Failed to extract JSON object from response text')
      }
    }

    // Verifica si el JSON incluye 'replace' o 'replaceBackground'
    if (jsonResponse.replace || jsonResponse.replaceBackground) {
      return jsonResponse
    }

    // Si no contiene 'replace' o 'replaceBackground', lo tratamos como transformaciones
    return {
      transformations: jsonResponse,
    }
  } catch (error) {
    console.error('Error generating custom transform:', error)
    throw error // O manejar el error según sea necesario
  }
}

function extractObjectFromText(text: string) {
  const match = text.match(`/\{.*?\}/s`) // Busca el contenido entre llaves
  if (match) {
    try {
      return JSON.parse(match[0]) // Intenta parsear el objeto extraído
    } catch {
      console.error('Failed to extract valid JSON from text')
    }
  }
  return null // Retorna null si no encuentra o no puede parsear el JSON
}

export async function POST(request: Request) {
  try {
    const { transform } = await request.json()
    console.log('transform', transform)
    if (!transform) {
      return NextResponse.json({ data: null, error: 'No transform provided' })
    }

    const response = await generateCustomTransform(transform)

    if (!response || response.error) {
      return NextResponse.json({
        data: null,
        error: response.error || 'Failed to generate transform',
      })
    }

    return NextResponse.json({ data: response })
  } catch (error) {
    console.error('Error in POST handler:', error)
    return NextResponse.json({ error: 'An error occurred', details: error })
  }
}
