import Drink from "./drink"
import { useState, useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import type { FieldValues } from "react-hook-form"
import type{ FormValues, TypeSection, FormDrinksValues } from "../../types"
import createElemet from "../../api/createElement"
import getAllData from "../../api/getAllData"
import deleteData from "../../api/deleteData"
import updateData from "../../api/updateData"
import '../../styles/createCard.css'

function CreateCard():JSX.Element {
  const [description, setDescription] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setSectionId] = useState<string[]>([])

  // Controladores del formulario de bebidas
  const { register: registerDrinks, control: controlDrinks, reset: resetDrinks } = useForm<FormDrinksValues>({
    defaultValues: {
      drinks: []
    }
  })

  // Configuración de las bebidas
  const { fields: fieldsDrinks, append: appendDrinks } = useFieldArray({
    name: "drinks",
    control: controlDrinks
  })

  const addDrink = (sectionId: string | undefined, description: boolean): void => {
    appendDrinks(
      { description, sectionId, id:`${Date.now()}` }
    )
  }

  const deleteDrink = (id:string): void => {
    const updatedDrinks = fieldsDrinks.filter((drink) => drink.id !== id)
    resetDrinks({drinks: updatedDrinks})
  }

  
  /*----------------------------------------------------------------------*/

  // Controladores del formulario de secciones
  const { register: registerSections, handleSubmit: handleSubmitSections, control: controlSections, reset: resetSections } = useForm<FormValues>({
    defaultValues: {
      sections: []
    }
  })

  // Configuración de las secciones
  const { fields: fieldsSections, append: appendSections, remove: removeSections } = useFieldArray({
    name: "sections",
    control: controlSections
  })

  const addSection = (): void => {
    appendSections({ title:"new-section" })
  }

  useEffect(()=> {
    (async(): Promise<void> => {
      const savedSection = await getAllData('sections')
      if (savedSection) {
        const sectionIds = savedSection.map((section: TypeSection) => section._id) // Extraer IDs
        setSectionId(sectionIds)
        resetSections({
          sections: savedSection
        })
      }
    })()
  }, [resetSections, resetDrinks])

  const handleDeleteSection = (sectionId: string | undefined, index: number ): void => {
    if (sectionId) {
      deleteData('sections', sectionId)
    }
    removeSections(index)
  }

  /*----------------------------------------------------------------------*/

  const onSubmitForm = async (data: FieldValues): Promise<void> => {
    const { sections } = data
    // Primero, crear nuevas secciones
    for (const section of sections) {
      if (!section._id) {
        await createElemet('sections', section)
      }
    }
    // Luego, actualizar las secciones existentes
    for (const section of sections) {
      if (section._id) {
        await updateData('sections', section._id, section.title)
      }
    }
  }

  return(
    <>
      <form onSubmit={handleSubmitSections(onSubmitForm)} className="drinks-container">
        <div>
          {
            fieldsSections.map((section, index)=> {
              return(
                <section key={index} style={{marginBottom:"200px"}}>
                  <input
                    {...registerSections(`sections.${index}.title`)}
                    required
                    type="text"
                    style={{ fontSize: "2em", color: "#fff", textAlign: "center" }}
                    defaultValue={section.title}
                  />
                  <div className="btn-section-container">
                    <button className="erase" type="button" onClick={() => handleDeleteSection(section._id, index)}>Eliminar sección</button>
                    <button className="btn-a" type="button" onClick={() => addDrink(section._id, description)}>Añadir bebida</button>
                    <button className="btn-c" type="button" onClick={() => setDescription(!description)}>{description ? <span>Con descripción</span> : <span>Sin descripción</span>}</button>
                  </div>
                  
                  <ul className="drinks">
                    {
                    fieldsDrinks
                      .filter((drink)=> section._id === drink.sectionId)
                      .map((drink, drinkIndex)=> {
                        return(
                          <li key={drink.id}>

                              <Drink 
                                onDelete={()=>deleteDrink(drink.id)}
                                id={drink.id}
                                description={drink.description}
                                index={drinkIndex}
                                register={registerDrinks}
                              />

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
