import axios from "axios"

const api = 'http://localhost:1234'

// la url debe llevar 'sections' por ejemplo, sin usar '/'
const getData = async (url: string) => {
  try {
    const res = await axios.get(`${api}${url}`)
    if (res) {
      return res.data
    }
  }catch (err) {
    console.log("error en la petición get", err)
  }
}

export default getData
