import weatherHelper from '../helpers/weatherHelper'
import iconsHelper from '../helpers/iconsHelper'
import moment from 'moment'

export default function WeatherPreview({ city }) {

  function isDayOrNight(time) {
    return moment(time, 'YYYY-MM-DD HH:mm').isBetween(moment('07', 'HH'), moment('21', 'HH'), 'hours')
  }

  return <div className="pt-10">
    <figure className="min-h-[240px]">
      <img
        src={ iconsHelper.getWeatherIcon(city.condition.code, weatherHelper.isDayOrNight(city.last_updated)) }
        alt={ city.condition.text }
        className="w-64 mx-auto"
      />
      <figcaption className="sr-only">{ city.condition.text }</figcaption>
    </figure>
    <ul className="flex justify-around mt-7">
      <li className="space-y-1">
        <p className="text-[14px] text-white/60 font-light">Temp</p>
        <p className="text-[18px] font-medium">
          <var className="not-italic">{ Math.round(city.temp_c) }</var>
          <sup className="not-italic">°C</sup>
        </p>
      </li>
      <li className="space-y-1">
        <p className="text-[14px] text-white/60 font-light">Vent</p>
        <p className="text-[18px] font-medium">{ Math.round(city.wind_kph) } km/h</p>
      </li>
      <li className="space-y-1">
        <p className="text-[14px] text-white/60 font-light">Humidité</p>
        <p className="text-[18px] font-medium">{ city.humidity }%</p>
      </li>
    </ul>
  </div>
}