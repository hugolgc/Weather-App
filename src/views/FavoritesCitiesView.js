import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import iconsHelper from '../helpers/iconsHelper'
import weatherService from '../services/weatherService'
import { useAppState } from '../store'

export default function FavoritesCitiesView() {

  const [cityName, setCityName] = useState('')
  const [cityWeather, setCityWeather] = useState(null)
  const [favoritesCitiesList, setFavoritesCitiesList] = useState([])
  const { favoritesCities } = useAppState()

  async function getMultiplesCityWeather(favoritesCities) {
    try {
      return await weatherService.getMultipleCitiesByName(favoritesCities)
    } catch (error) {
      console.log(error)
    }
  }

  async function getCityWeather(name) {
    try {
      return await weatherService.getCityByName(name)
    } catch (error) {
      console.log(error)
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const cityWeather = await getCityWeather(cityName)
    setCityWeather(cityWeather)
  }

  useEffect(async () => {
    const favoritesCitiesList = await getMultiplesCityWeather(favoritesCities)
    setFavoritesCitiesList(favoritesCitiesList)
  }, [])

  return <>
    <header className="text-center">
      <h1 className="mb-3.5 text-[26px]">Lieux favoris</h1>
      <p className="max-w-sm mx-auto text-white/60 font-light">Trouvez la ville que vous dont souhaitez connaître les infos météo détaillées en ce moment</p>
    </header>
    <form method="post" className="pt-12" onSubmit={ e => handleSubmit(e) }>
      <label className="relative block">
        <span className="sr-only">Chercher la météo d'une ville</span>
        <input
          required
          type="text"
          maxLength="80"
          placeholder="Chercher"
          className="h-14 w-full pl-14 pr-3.5 bg-white/5 rounded-[12px] font-light"
          value={ cityName }
          onChange={ ({ target }) => setCityName(target.value) }
        />
        <span className="absolute left-5 inset-y-0 flex items-center text-white/60">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </span>
      </label>
    </form>
    <ul className="grid grid-cols-2 gap-5 pt-12">

      { cityName.length && cityWeather ? <li>
        <Link to={ `/favorites/${ cityWeather.location.name.toLowerCase() }` } className="relative block p-5 bg-white/5 rounded-[20px]">
          <p className="text-[28px]">
            <span>{ Math.round(cityWeather.current.temp_c) }</span>
            <sup>°</sup>
          </p>
          <p className="pb-6 text-white/60 font-light">{ cityWeather.current.condition.text }</p>
          <h2 className="text-[18px]">{ cityWeather.location.name }</h2>
          <img
            src={ iconsHelper.getWeatherIcon(cityWeather.current.condition.code, true) }
            alt={ cityWeather.current.condition.text }
            className="absolute top-5 right-5 w-16"
          />
        </Link>
      </li> : <>

        { favoritesCitiesList.map(city => <li>
          <Link to={ `/favorites/${ city.location.name.toLowerCase() }` } className="relative block p-5 bg-white/5 rounded-[20px]">
            <p className="text-[28px]">
              <span>{ Math.round(city.current.temp_c) }</span>
              <sup>°</sup>
            </p>
            <p className="pb-6 text-white/60 font-light">{ city.current.condition.text }</p>
            <h2 className="text-[18px]">{ city.location.name }</h2>
            <img
              src={ iconsHelper.getWeatherIcon(city.current.condition.code, true) }
              alt={ 'current weather' }
              className="absolute top-5 right-5 w-16"
            />
          </Link>
        </li> )}

      </> }

    </ul>
  </>
}