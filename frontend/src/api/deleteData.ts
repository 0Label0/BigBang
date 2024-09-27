import axios from "axios"

const api = "http://localhost:"

export const deleteAllData = async (url: string) => {
  try {
    const deleteData = await axios.delete(`${api}/${url}`)
    console.log("Los datos han sido eliminados", deleteData)
  }catch(err) {
    console.log("Error en la eliminación de datos", err)
  }
}
