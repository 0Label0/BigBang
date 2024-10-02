import axios from "axios"
import { api } from "../const"

const updateData = async (url: string, id: string | undefined, body: object): Promise<void> => {
  try {
    const res = await axios.put(`${api}/${url}/${id}`, body)
    console.log('La acutalización de los datos ha tenido éxito', res)
  }catch(err) {
    console.log('Error en la actualización de los datos ',err)
  }
}

export default updateData
