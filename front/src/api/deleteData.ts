import axios from "axios"
import { api } from "../const"

const deleteData = async (url: string, id: string | undefined): Promise<void> => {
  try {
    console.log(id)
    const requestUrl = `${api}/${url}/${id}`;
    const deleteResponse = await axios.delete(requestUrl)
    console.log("El dato ha sido eliminado: ", deleteResponse)
  } catch (err) {
    console.error("Error en la eliminación de datos: ", err)
  }
}

export default deleteData
