import type { FieldValues } from "react-hook-form"
import type { TypeSection } from '../types'
import axios from "axios"

const api = 'http://localhost:1234'

export const sectionsArray = async (data: FieldValues): Promise<void> => {

  if(!Array.isArray(data.sections)) {
    throw new Error("Secciones no válidas")
  }

  const processedSections: Array<{ title: string }> = data.sections.map((section: TypeSection) => ({
    title: section.title,
    id: section.id
  }))

  try {
    const res = await axios.post(`${api}/sections`, processedSections, {
      headers: { 'Content-Type': 'application/json' }
    })
    if (!res.data.sections) {
      throw new Error("La propiedad 'sections' no está definida en la respuesta del servidor");
    }
    
    console.log('Sección creada', res.data.sections)

  } catch(err) {
    console.log('Error en el envío de datos', err)
  }
}
