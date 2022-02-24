import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import weatherService from '../services/weatherService'
import favoritesHelper from '../helpers/favoritesHelper'
import CityPreview from '../components/CityPreview'
import Loader from '../components/Loader'
import { useActions, useAppState } from '../store'

export default function CityWeatherView() {
  
  const { cityName } = useParams()
  const { favoritesCities } = useAppState()
  const [cityWeather, setCityWeather] = useState(null)
  const [cityInFavorites, setCityInFavorites] = useState(false)
  const actions = useActions()

  async function getCityWeather(name) {
    try {
      return await weatherService.getCityByName(name)
    } catch (error) {
      console.log(error)
    }
  }

  function handleFavorite(cityName) {
    const favoritesCitiesList = favoritesHelper.toggleFavoriteCity(favoritesCities, cityName)
    setCityInFavorites(favoritesCitiesList.find(city => city === cityWeather.location.name))
    actions.setFavoritesCities(favoritesCitiesList)
  }

  useEffect(async () => {
    const cityWeather = await getCityWeather(cityName)
    setCityWeather(cityWeather)
    setCityInFavorites(favoritesCities.find(city => city === cityWeather.location.name))
  }, [])

  return cityWeather ? <>
    <CityPreview city={ cityWeather } showPreview={ false } />
    <Link to="/favorites" className="absolute top-11 left-7 w-12 h-12 flex justify-center items-center bg-white/5 rounded-full">
      <span className="sr-only">Retour</span>
      <span className="text-white/60">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </span>
    </Link>
    <button onClick={ () => handleFavorite(cityWeather.location.name) } className="absolute top-11 right-7 w-12 h-12 flex justify-center items-center bg-white/5 rounded-full">
      <span className="sr-only">Retour</span>

      { cityInFavorites ? <span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </span> : <span className="text-white/60">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        </span>
      }

    </button>
  </> : <Loader />
}