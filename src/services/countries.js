import axios from 'axios'

const baseApiPath = 'https://restcountries.eu/rest/v2'

export default function getCountries() {
  let url = baseApiPath + '/all'

  return axios.get(url)
}
