// 防抖函数
let timer
export function debounce(fn, time = 30) {
  if (typeof fn !== 'function') {
    throw new Error('必须传入一个函数作为参数')
  }
  timer && clearTimeout(timer)
  timer = setTimeout(() => {
    fn()
  }, time)
}

// 补0
export function fixZero(num = 0) {
  return num > 9 ? num : `0${num}`
}
