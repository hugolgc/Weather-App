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
  }
}

export default weatherService