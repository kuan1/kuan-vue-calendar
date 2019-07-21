import Calendar from './common/Calendar'
import CalendarPicker from './common/CalendarPicker.vue'

const install = Vue => {
  Vue.component('calendar', Calendar)
  Vue.component('calendar-picker', CalendarPicker)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

export { Calendar, CalendarPicker }
