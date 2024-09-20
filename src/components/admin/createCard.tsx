import CreateDrink from "./createDrink";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useLocalStorage } from "./useLocalStorage";
import type { TypeDrink, TypeSection } from "./types";
import './createCard.css';

function CreateCard():JSX.Element {

  const [description, setDescription] = useState<boolean>(false);
  const [drinks, setDrinks] = useLocalStorage('drinks', []);
  const [sections, setSections] = useLocalStorage(`section`,[]);
  const { register, handleSubmit } = useForm()

  const addDrink = (sectionId: string): void => {
    const id = `${Date.now()}`
    setDrinks(
      [...drinks, { id, description, sectionId }]
    );
  };

  const deleteDrink = (id: string):void => {
    const updateDrinks = drinks.filter((drink: TypeDrink)=>drink.id !== id); 
    setDrinks(updateDrinks);
  };

  const toggleDescription = (): void => {
    setDescription(!description);

  };

  const addSection = (): void => {
    const id = `${Date.now()}`;
    const title = 'new_section';
    setSections(
      [...sections, { id, title }]
    )
  };

  const handleSectionTitleChange = (id: string, newTitle: string) => {
    const updatedSections = sections.map((section: TypeSection) => 
      section.id === id ? { ...section, title: newTitle } : section
    );
    
    setSections(updatedSections);
  };

  const eraseSection = (id: string) => {
    const updateSections: string = sections.filter((section: TypeSection) => section.id !== id)
    setSections(updateSections)
    localStorage.setItem('sections', JSON.stringify(updateSections))
  };


  return(
    <>
      <form className="drinks-container">
        <div>
          {
            sections.map((section: TypeSection)=> {
              return(
                <section key={section.id} style={{marginBottom:"200px"}}>
                  <input type="text" style={{fontSize:"2em", color:"#fff",textAlign:"center"}} value={section.title} onChange={(e)=>handleSectionTitleChange(section.id, e.target.value)}/>
                  <div className="btn-section-container">
                    <button className="erase" onClick={()=>eraseSection(section.id)}>Eliminar sección</button>
                    <button className="btn-a" onClick={()=>addDrink(section.id)}><span>Añadir bebida</span></button>
                  </div>
                  
                  <ul className="drinks">
                    {
                    drinks
                      .filter((drink:TypeDrink)=> section.id === drink.sectionId)
                      .map((drink:TypeDrink)=> {
                        return(
                          <li key={drink.id}>
                              <CreateDrink onDelete={deleteDrink} id={(drink.id + '')} description={drink.description} />
                          </li>
                        );
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
            <button className="btn-b" onClick={toggleDescription}>{description ? <span>Con descripción</span> : <span>Sin descripción</span>}</button>
            <button className="btn-b" onClick={addSection}><span>Añadir sección</span></button>
            <button className="btn-b" type="submit">Guardar datos</button>
          </div>
        </div>
    
      </form>
    </>
  );
}

export default CreateCard;