import axios from "axios"
import { api } from "../const"

// la url debe llevar 'sections' por ejemplo, sin usar '/'
const getAllData = async (url: string) => {
  try {
    const res = await axios.get(`${api}/${url}`)
    if (res) {
      return res.data
    }
  }catch (err) {
    console.log("error en la petición get", err)
  }
}

export default getAllData
