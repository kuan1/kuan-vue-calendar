import Calendar from './Calendar'

const install = Vue => {
  Vue.component('Calendar', Calendar)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}

export { Calendar }
