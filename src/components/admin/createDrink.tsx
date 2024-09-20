import type { TypeCreateDrink } from "./types";
import { useLocalStorage } from "./useLocalStorage";
import './createDrink.css';

function CreateDrink({ description, id, onDelete }:TypeCreateDrink):JSX.Element {

  const DRINK_NAME = `drinkName_${id}`;
  const PRICE = `price_${id})`;
  const DESCRIPTION = `description_input_${id}`;

  const [drinkName, setDrinkName] = useLocalStorage(DRINK_NAME, '');
  const [price, setPrice] = useLocalStorage(PRICE, '');
  const [descriptionInput, setDescriptionInput] = useLocalStorage(DESCRIPTION, '');

  const removeItem = () :void => {
    localStorage.removeItem(DRINK_NAME);
    localStorage.removeItem(PRICE);
    localStorage.removeItem(DESCRIPTION);

    onDelete(id);
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
  );
}

export default CreateDrink;
