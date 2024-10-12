import React from 'react'
import ViewImage from '@/components/image/ViewImage'
import Cut from '@/components/tools/Cut'

export default function EditorPage() {
  return (
    <main>
      <h2>Edita tu imagen</h2>
      <section>
        <ViewImage />
        <Cut/>
      </section>
    </main>
  )
}
