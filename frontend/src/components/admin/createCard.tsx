import CreateDrink from "./createDrink"
import { useState, useEffect } from "react"
import { useForm, useFieldArray } from "react-hook-form"
import type { FieldValues } from "react-hook-form"
import type { TypeDrink, FormValues } from "../../types"
import { sectionsArray } from "../../api/sectionServices"
import getData from "../../api/getData"
import '../../styles/createCard.css'

function CreateCard():JSX.Element {
  const [description, setDescription] = useState<boolean>(false)
  const [drinks, setDrinks] = useState<TypeDrink[]>([])

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
  
  const addDrink = (sectionId: number): void => {
    const id = `${Date.now()}`
    setDrinks(
      [...drinks, { id, description, sectionId }]
    )
  }

  const deleteDrink = (id: string):void => {
    const updateDrinks = drinks.filter((drink: TypeDrink)=>drink.id !== id) 
    setDrinks(updateDrinks)
  }

  const toggleDescription = (): void => {
    setDescription(!description)
  }

  const addSection = (): void => {
    append({ title:"new-section", id: `${Date.now()}` })
  }

  useEffect(()=> {
    (async()=> {
      const savedSection = await getData('/sections')
      reset({
        sections: savedSection || []
      })
    })()
  }, [reset])

  const onSubmitForm = async (data: FieldValues): Promise<void> => {
    await sectionsArray(data)
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
                    defaultValue={section.title} // Usa defaultValue en lugar de value
                  />
                  <div className="btn-section-container">
                    <button className="erase" type="button" onClick={()=>remove(index)}>Eliminar sección</button>
                    <button className="btn-a" type="button" onClick={()=>addDrink(index)}><span>Añadir bebida</span></button>
                  </div>
                  
                  <ul className="drinks">
                    {
                    drinks
                      .filter((drink)=> index === drink.sectionId)
                      .map((drink)=> {
                        return(
                          <li key={drink.id}>
                              <CreateDrink onDelete={deleteDrink} id={(drink.id + '')} description={drink.description} />
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
            <button className="btn-b" type="button" onClick={toggleDescription}>{description ? <span>Con descripción</span> : <span>Sin descripción</span>}</button>
            <button className="btn-b" type="button" onClick={addSection}><span>Añadir sección</span></button>
            <button className="btn-b" type="submit">Guardar datos</button>
          </div>
        </div>
    
      </form>
    </>
  )
}

export default CreateCard
