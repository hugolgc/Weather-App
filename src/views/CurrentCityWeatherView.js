import { Component } from 'react'
import weatherService from '../services/weatherService'
import CityPreview from '../components/CityPreview'
import Loader from '../components/Loader'

export default class CurrentCityWeatherView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCityWeather: null
    }
  }

  async getCurrentCityWeather(coords) {
    try {
      return await weatherService.getCityByCoords(coords)
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const currentCityWeather = await this.getCurrentCityWeather(coords)
      this.setState({ currentCityWeather: currentCityWeather })
    })
  }

  render() {
    return this.state.currentCityWeather ? <CityPreview city={ this.state.currentCityWeather } showPreview={ true } /> : <Loader />
  }
}