import { api } from "../const"
import axios from "axios"

const createElemet = async (url:string, data:object): Promise<void> => {
  try {
    const res = await axios.post(`${api}/${url}`, data, {
      headers: { 'Content-Type': 'application/json' }
    })
    console.log('El elemento ha sido creado ',res.data)

  } catch(err) {
    console.log('Error en el envío de datos', err)
  }
}

export default createElemet
