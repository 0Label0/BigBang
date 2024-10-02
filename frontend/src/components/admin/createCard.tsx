import Drinks from "./drink"
import React, { useState, useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import type { FieldValues } from "react-hook-form"
import type { TypeDrink, FormValues, TypeSection } from "../../types"
import sectionsArray from "../../api/sectionServices"
import getData from "../../api/getData"
import deleteData from "../../api/deleteData"
import updateData from "../../api/updateData"
import '../../styles/createCard.css'

function CreateCard():JSX.Element {
  const [description, setDescription] = useState<boolean>(false)
  const [drinks, setDrinks] = useState<TypeDrink[]>([])
  const [_, setSectionId] = useState<string[]>([])

  // Controladores del formulario
  const { register, handleSubmit, control, reset } = useForm<FormValues>({
    defaultValues: {
      sections: []
    }
  })

  // Configuración de useFieldArray
  const { fields, append, remove } = useFieldArray({
    name: "sections",
    control
  })
  
  const addDrink = (sectionId: string | undefined, description: boolean): void => {
    setDrinks(
      [...drinks, { id: `${Date.now()}`, description, sectionId }]
    )
  }

  const deleteDrink = (id: string): void => {
    const updateDrinks = drinks.filter((drink: TypeDrink)=>drink.id !== id) 
    setDrinks(updateDrinks)
  }

  const addSection = (): void => {
    append({ title:"new-section" })
  }

  useEffect(()=> {
    (async(): Promise<void> => {
      const savedSection = await getData('sections')
      if (savedSection) {
        const sectionIds = savedSection.map((section: TypeSection) => section._id) // Extraer IDs
        setSectionId(sectionIds)
        reset({
          sections: savedSection
        })
      }
    })()
  }, [reset])

  const handleDeleteSection = (sectionId: string | undefined, index: number ): void => {
    try {
      deleteData('sections', sectionId)
      remove(index)
    } catch (error) {
      console.error("Error al eliminar la sección:", error);
    }
  }

  const onSubmitForm = async (data: FieldValues): Promise<void> => {
    // create sections
    await sectionsArray(data)

    // update sections
    const { sections } = data
    for (const section of sections) {
      await updateData('sections', section._id, section.title)
    }
  }

  return(
    <>
      <form onSubmit={handleSubmit(onSubmitForm)} className="drinks-container">
        <div>
          {
            fields.map((section, index)=> {
              return(
                <section key={index} style={{marginBottom:"200px"}}>
                  <input
                    {...register(`sections.${index}.title`)}
                    type="text"
                    style={{ fontSize: "2em", color: "#fff", textAlign: "center" }}
                    defaultValue={section.title}
                  />
                  <div className="btn-section-container">
                    <button className="erase" type="button" onClick={()=>handleDeleteSection(section._id, index)}>Eliminar sección</button>
                    <button className="btn-a" type="button" onClick={()=>addDrink(section._id, description)}>Añadir bebida</button>
                    <button className="btn-c" type="button" onClick={()=> setDescription(!description)}>{description ? <span>Con descripción</span> : <span>Sin descripción</span>}</button>
                  </div>
                  
                  <ul className="drinks">
                    {
                    drinks
                      .filter((drink)=> section._id === drink.sectionId)
                      .map((drink)=> {
                        return(
                          <li key={drink.id}>
                              <Drinks onDelete={deleteDrink} id={(drink.id + '')} description={drink.description} />
                          </li>
                        )
                      })
                    }
                  </ul>
                  
                </section>
              )

            })
          }
        </div>

        <div className="container">
          <div className="btn-container">
            <button className="btn-b" type="button" onClick={addSection}><span>Añadir sección</span></button>
            <button className="btn-b" type="submit">Guardar datos</button>
          </div>
        </div>
    
      </form>
    </>
  )
}

export default CreateCard
