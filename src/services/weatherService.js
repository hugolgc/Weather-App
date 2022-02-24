import weatherRepository from '../repositories/weatherRepository'
import weatherFactory from '../factories/weatherFactory'

const weatherService = {
  async getCityByCoords(coords) {
    try {
      const cityWeather = await weatherRepository.getCityByCoords(coords)
      return weatherFactory.formatCityWeather(cityWeather) 
    } catch (error) {
      console.log(error)
    }
  },
  async getCityByName(name) {
    try {
      const cityWeather = await weatherRepository.getCityByName(name)
      return weatherFactory.formatCityWeather(cityWeather) 
    } catch (error) {
      console.log(error)
    }
  },
  async getMultipleCitiesByName(cities) {
    let citiesWeather = []
    try {
      for (const city of cities) {
        citiesWeather.push(this.getCityByName(city))
      }
      return await Promise.all(citiesWeather)
    } catch (error) {
      console.log(error)
    }
  }
}

export default weatherService