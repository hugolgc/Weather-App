const {
  REACT_APP_API_URL,
  REACT_APP_API_KEY
} = process.env

const weatherRepository = {
  async getCityByCoords({ latitude, longitude }) {
    try {
      const cityForecast = await fetch(`${ REACT_APP_API_URL }/forecast.json?key=${ REACT_APP_API_KEY }&q=${ latitude },${ longitude }&days=7`)
      return await cityForecast.json()
    } catch(error) {
      console.log(error)
    }
  },
  async getCityByName(name) {
    try {
      const cityForecast = await fetch(`${ REACT_APP_API_URL }/forecast.json?key=${ REACT_APP_API_KEY }&q=${ name }&days=7`)
      return await cityForecast.json()
    } catch(error) {
      console.log(error)
    }
  }
}

export default weatherRepository