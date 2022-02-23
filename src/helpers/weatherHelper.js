import moment from 'moment'

const weatherHelper = {
  getSameOrBeforeCurrentHours(hours) {
    return hours.filter(({ time }) => moment(time, 'YYYY-MM-DD HH:mm').isSameOrAfter(moment(), 'hours'))
  },
  isDayOrNight(time) {
    return moment(time, 'YYYY-MM-DD HH:mm').isBetween(moment('07', 'HH'), moment('21', 'HH'), 'hours')
  }
}

export default weatherHelper