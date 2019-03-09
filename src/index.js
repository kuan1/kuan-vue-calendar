import Calendar from './Calendar'

const install = Vue => {
  Vue.component('vue-calendar', Calendar)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export { Calendar }
