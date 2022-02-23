import { Component } from 'react'
import weatherService from '../services/weatherService'
import weatherHelper from '../helpers/weatherHelper'
import iconsHelper from '../helpers/iconsHelper'
import WeatherPreview from '../components/WeatherPreview'
import Loader from '../components/Loader'
import moment from 'moment'
import 'moment/locale/fr'
moment.locale('fr')

export default class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentCityWeather: null
    }
  }

  async getCurrentCityWeather(coords) {
    try {
      const getCityByCoords = await weatherService.getCityByCoords(coords)
      return getCityByCoords
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async ({ coords }) => {
      const currentCityWeather = await this.getCurrentCityWeather(coords)
      console.log(currentCityWeather)
      this.setState({ currentCityWeather: currentCityWeather })
    })
  }

  render() {
    return this.state.currentCityWeather ? <>
      <header className="text-center">
        <h1 className="mb-3.5 text-[26px]">{ this.state.currentCityWeather.location.name }</h1>
        <p className="text-white/60 font-light">
          <time dateTime="2022-02-22">{ this.state.currentCityWeather.location.region }, { this.state.currentCityWeather.location.country }</time>
        </p>
        <WeatherPreview city={ this.state.currentCityWeather.current } />
      </header>
      <section>
        <div className="flex justify-between items-center pt-14 pb-7">
          <h2 className="text-[22px] font-light">Aujourd'hui</h2>
          <p className="text-white/60 font-light capitalize">
            <time dateTime="2022-02-22">{ moment().format('dddd DD MMMM') }</time>
          </p>
        </div>
        <ul className="w-screen flex space-x-3 -translate-x-7 overflow-x-auto">

          { this.state.currentCityWeather.forecast.forecastday[0].hour.map((hour, key) => <li key={ key } className="first:pl-7 last:pr-7">
            <figure className={ `w-36 h-[74px] flex justify-between items-center px-5 rounded-[16px] ${ key === 0 ? 'bg-[#1B86E6]' : 'bg-white/5' }` }>
              <img
                src={ iconsHelper.getWeatherIcon(hour.condition.code, weatherHelper.isDayOrNight(hour.time)) }
                alt={ hour.condition.text }
                className="w-12"
              />
              <figcaption>
                <span className="text-[14px] font-medium">
                  <time dateTime={ hour.time }>{ moment(hour.time, 'YYYY-MM-DD HH:mm').format('HH:mm') }</time>
                </span>
                <span className="block text-[20px]">
                  <var className="not-italic">{ Math.round(hour.temp_c) }</var>
                  <sup className="not-italic">°c</sup>
                </span>
              </figcaption>
            </figure>
          </li> )}

        </ul>
      </section>
      <section>
        <h2 className="py-7 text-[22px] font-light">Prochains jours</h2>
        <ul className="space-y-7">

          { this.state.currentCityWeather.forecast.forecastday.map((forecastday, key) => key !== 0 ?
            <li className="h-[88px] flex justify-between items-center px-5 bg-white/5 rounded-[18px]" key={ key }>
              <p className="text-center capitalize">
                <span className="block">{ moment(forecastday.date, 'YYYY-MM-DD').format('dddd') }</span>
                <span className="block text-white/60 font-light">{ moment(forecastday.date, 'YYYY-MM-DD').format('DD MMM') }</span>
              </p>
              <p className="flex">
                <span className="text-[46px]">{ Math.round(forecastday.day.avgtemp_c) }</span>
                <span className="pt-2.5 text-[22px]">°C</span>
              </p>
              <img
                src={ iconsHelper.getWeatherIcon(forecastday.day.condition.code, true) }
                alt={ forecastday.day.condition.text }
                className="w-16"
              />
            </li> : ''
          )}

        </ul>
      </section>
    </> : <Loader />
  }
}