const {
  REACT_APP_API_URL,
  REACT_APP_API_KEY
} = process.env

const weatherRepository = {
  // async fetchCurrentCityWeather() {
  //   try {
  //     const data = await fetch(`${ REACT_APP_API_URL }/current.json?key=${ REACT_APP_API_KEY }&q=50.62925,3.057256`)
  //     return await data.json()
  //   } catch(error) {
  //     console.log('error', error)
  //   }
  // },
  async getCityByCoords({ latitude, longitude }) {
    try {
      const currentCityForecast = await fetch(`${ REACT_APP_API_URL }/forecast.json?key=${ REACT_APP_API_KEY }&q=${ latitude },${ longitude }&days=7`)
      return await currentCityForecast.json()
    } catch(error) {
      console.log(error)
    }
  },
}

export default weatherRepository