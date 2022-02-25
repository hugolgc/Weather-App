import { Link } from 'react-router-dom'
import iconsHelper from '../helpers/iconsHelper'

export default function CityCard({ city }) {
  return <Link to={ `/favorites/${ city.location.name.toLowerCase() }` } className="relative block p-5 bg-white/5 rounded-[20px]">
  <p className="text-[28px]">
    <span>{ Math.round(city.current.temp_c) }</span>
    <sup>°</sup>
  </p>
  <p className="pt-3 pb-3 text-white/60 font-light">{ city.current.condition.text }</p>
  <h2 className="text-[18px]">{ city.location.name }</h2>
  {/* { city.current.condition.code } */}
  <img
    src={ iconsHelper.getWeatherIcon(city.current.condition.code, true) }
    alt={ city.current.condition.text }
    className="absolute top-5 right-5 w-16"
  />
</Link>
}