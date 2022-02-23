const iconsHelper = {
  weatherIcon: {
    1000: [require('../assets/icons/sun/26.png'), require('../assets/icons/moon/10.png')],
    1003: [require('../assets/icons/sun/27.png'), require('../assets/icons/moon/10.png')],
    1006: [require('../assets/icons/cloud/35.png'), require('../assets/icons/moon/10.png')],
    1009: [require('../assets/icons/cloud/35.png'), require('../assets/icons/moon/10.png')],
    1030: [require('../assets/icons/sun/6.png'), require('../assets/icons/moon/10.png')],
    1063: [require('../assets/icons/sun/6.png'), require('../assets/icons/moon/10.png')],
    1066: [require('../assets/icons/cloud/23.png'), require('../assets/icons/moon/10.png')],
    1087: [require('../assets/icons/cloud/25.png'), require('../assets/icons/moon/10.png')],
    1114: [require('../assets/icons/cloud/18.png'), require('../assets/icons/moon/10.png')],
    1117: [require('../assets/icons/sun/6.png'), require('../assets/icons/moon/10.png')],
    1135: [require('../assets/icons/sun/4.png'), require('../assets/icons/moon/10.png')],
    1150: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')],
    1153: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')],
    1171: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')],
    1180: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')],
    1183: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')],
    1186: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')],
    1189: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')],
    1192: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')],
    1195: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')],
    1240: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')],
    1243: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')],
    1246: [require('../assets/icons/cloud/7.png'), require('../assets/icons/moon/10.png')]
  },
  getWeatherIcon(code, isDayOrNight) {
    return this.weatherIcon[code][isDayOrNight ? 0 : 1]
  }
}

export default iconsHelper