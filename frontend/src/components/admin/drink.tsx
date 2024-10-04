import type { TypeCreateDrink } from "../../types"
import { useState } from "react"
import '../../styles/createDrink.css'

function Drink({ description, onDelete, index, register, id }:TypeCreateDrink):JSX.Element {

  const removeItem = () :void => {
    onDelete(id)
  }

  return (
    <div className="drink-container">
      <div className="drink">
        <div className="box reveal">

          <input
            {...register(`drinks.${index}.name`)}
            required
            type="text"
            className="name"
            placeholder="bebida" 
          />

          <input
            {...register(`drinks.${index}.price`)}
            required 
            type="text" 
            className="price"  
            placeholder="0.00€" 
          />

        </div>
        {
          description ? 
          <input 
            {...register(`drinks.${index}.description`)}
            type="text" 
            className="description" 
            placeholder='descripción' 

          /> 
          : 
          <div className="undescription"></div>
        }

      </div>

      <button className="erase" onClick={removeItem}>Borrar</button>
    </div>
  )
}

export default Drink
