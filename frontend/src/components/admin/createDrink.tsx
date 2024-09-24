import type { TypeCreateDrink } from "./types"
import './createDrink.css'
import { useState } from "react"

function CreateDrink({ description, id, onDelete }:TypeCreateDrink):JSX.Element {

  const [drinkName, setDrinkName] = useState<string>('')
  const [price, setPrice] = useState<string>('')
  const [descriptionInput, setDescriptionInput] = useState<string>('')

  const removeItem = () :void => {
    onDelete(id)
  }

  return (
    <div className="drink-container">
      <div className="drink">
        <div className="box reveal">
          <input type="text" className="name" placeholder="bebida" value={drinkName} onChange={(e)=>setDrinkName(e.target.value)}/>
          <input type="text" className="price"  placeholder="0,00€" value={price} onChange={(e)=>setPrice(e.target.value)}/>
          
        </div>
        {
          description ? <input type="text" className="description" placeholder='descripción' value={descriptionInput} onChange={(e)=>setDescriptionInput(e.target.value)}/> : <div className="undescription"></div>
        }

      </div>

      <button className="erase" onClick={removeItem}>Borrar</button>
    </div>
  )
}

export default CreateDrink
