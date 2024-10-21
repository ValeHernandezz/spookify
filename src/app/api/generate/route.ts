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

async function generateCustomTransform(transform: string, category: string) {
  try {
    const prompt = `Actúa como un generador de instrucciones de transformación de imágenes de Halloween. Las transformaciones que realices deben ser aterradoras y estar relacionadas con temas de terror. A continuación, te doy una descripción de la transformación que quiero realizar, y necesito que me devuelvas un objeto JSON con la estructura siguiente, basado en el tipo de transformación:

    1- Fondos (replaceBackground): { replaceBackground: "Descripción del nuevo fondo (máximo 6 palabras en inglés, debe ser aterrador)" }
    2- Overlay (máscara en la cara): { replace: { from: "face", to: "nombre_máscara (debe terminar con la palabra 'mask' y ser un elemento aterrador)", preserveGeometry: true } }
    3- Transformar (convertir a una persona en zombi): { replace: { from: "person", to: "aplicar efectos de zombi (piel pálida, ojos oscuros, rasgos desgastados) sin alterar las facciones ni la ropa original, preservando la estructura y geometría del cuerpo", preserveGeometry: true } }
    4- Disfraces (cambiar la ropa): { replace: { from: 'clothes_overalls_shoes', to: 'Transforms the clothes into Jason Voorhees outfit with his iconic hockey mask.', preserveGeometry: true } }

    Reglas:
      1. Las transformaciones deben ser temáticas de Halloween y dar miedo.
      2. Todo el contenido debe estar en inglés.
      3. Si es una transformación de cara (face), el valor de 'to' debe estar relacionado con algo aterrador.
      4. Si es convertir a una persona (person), la transformación debe ser específica y relacionada con el terror.
      5. La descripción para reemplazar el fondo (replaceBackground) debe ser aterradora y no debe tener más de 6 palabras.
      6. Los disfraces deben ser del personaje que se proporciona, ya sea de películas, cuentos, leyendas, u otros medios de ficción.
      7. Todos los 'to' deben ser máximo 6 palabras en inglés

    Basado en el tipo de transformación seleccionado, devuelve el objeto correspondiente de los puntos anteriores:
      
      - Si el tipo de transformación es "Transformar", devuelve el objeto número 3.
      - Si el tipo de transformación es "Fondos", devuelve el objeto número 1.
      - Si el tipo de transformación es "Overlay", devuelve el objeto número 2.
      - Si el tipo de transformación es "Disfraces", devuelve el objeto número 4.

    Genera exclusivamente un objeto JSON que siga la estructura dada, sin agregar explicaciones ni texto adicional. Solo devuelve el JSON.

    Tipo de transformacion: ${category}
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

      jsonResponse = extractObjectFromText(textResponse)

      if (!jsonResponse) {
        throw new Error('Failed to extract JSON object from response text')
      }
    }

    if (jsonResponse.replace || jsonResponse.replaceBackground) {
      return jsonResponse
    }

    return {
      transformations: jsonResponse,
    }
  } catch (error) {
    console.error('Error generating custom transform:', error)
    throw error
  }
}

function extractObjectFromText(text: string) {
  const match = text.match(`/\{.*?\}/s`)
  if (match) {
    try {
      return JSON.parse(match[0])
    } catch {
      console.error('Failed to extract valid JSON from text')
    }
  }
  return null
}

export async function POST(request: Request) {
  try {
    const { transform, category } = await request.json()
  
    if (!transform) {
      return NextResponse.json({ data: null, error: 'No transform provided' })
    }

    const response = await generateCustomTransform(transform, category)

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
