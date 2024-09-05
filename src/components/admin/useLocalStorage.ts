import { useState } from "react";

// Almacena un valor y lo devuelve
export function useLocalStorage(key:string, initialValue:unknown) {
  // Devuelve el dato o el valor inicial 
  const [storedValue, setStoredValue] = useState(()=> {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    }catch(err) {
      return initialValue
    }
  
  });

  // Almacena en el local storage
  const setValue = (value:unknown) => {
     if (typeof window !== 'undefined') {
      try{
        setStoredValue(value)
        window.localStorage.setItem(key, JSON.stringify(value))
      }catch(err) {
        console.log(err);
        
      }
  
    }
  }
  
  return [storedValue, setValue]
}  