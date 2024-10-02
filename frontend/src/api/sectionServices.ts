import type { FieldValues } from "react-hook-form"
import type { TypeSection } from '../types'
import { api } from "../const"
import axios from "axios"

const sectionsArray = async (data: FieldValues): Promise<void> => {

  if(!Array.isArray(data.sections)) {
    throw new Error("Secciones no válidas")
  }

  // Procesa las secciones
  const processedSections: Array<{ title: string }> = data.sections.map((section: TypeSection) => {
    if (!section.title) {
      throw new Error("Cada sección debe tener un título válido")
    }
    return { title: section.title }
  })

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

export default sectionsArray