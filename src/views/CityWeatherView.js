import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import weatherService from '../services/weatherService'
import CityPreview from '../components/CityPreview'
import Loader from '../components/Loader'

export default function CityWeatherView() {
  
  const { cityName } = useParams()
  const [cityWeather, setCityWeather] = useState(null)

  async function getCityWeather(name) {
    try {
      return await weatherService.getCityByName(name)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(async () => {
    const cityWeather = await getCityWeather(cityName)
    setCityWeather(cityWeather)
  }, [])

  return cityWeather ? <CityPreview city={ cityWeather } showPreview={ false } /> : <Loader />
}