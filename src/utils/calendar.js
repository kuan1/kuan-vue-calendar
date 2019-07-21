/*
 * @Description: 当月显示部分上月和部分下月的天数
 */

/**
 * 当前时间
 */
export const now = new Date()
export const nowYear = now.getFullYear()
export const nowMonth = now.getMonth() + 1
export const nowDay = now.getDate()

/**
 * @description: 获取当前时间 Date
 * @return: Date
 */
export function toDate(str = '') {
  return new Date(str.replace(/-/g, '/'))
}

/**
 * 处理当前时间
 */
function getItemDay(options) {
  const { year, month, day } = options
  const isNow = nowMonth === month && nowYear === year && nowDay === day
  if (isNow) options.isNow = true
  return options
}

/**
 * @description: 获取当月天数
 */
function getCurrentDays({ year, month }) {
  const lastDay = new Date(year, month, 0).getDate()
  const currentDays = []
  for (let i = 1; i <= lastDay; i++) {
    currentDays.push(
      getItemDay({
        year,
        month,
        day: i
      })
    )
  }
  return currentDays
}

/**
 * @description: 获取当月显示的上月天数
 */
function getPreDays({ year, month }) {
  const preDays = []
  // 当月第一天是星期几
  const firstDay = new Date(year, month - 1, 1).getDay()
  const preLastDay = new Date(year, month - 1, 0).getDate()
  if (firstDay === 7) return []
  const m = month > 2 ? month - 1 : 12
  const y = month > 2 ? year : year - 1
  for (let i = 0; i < firstDay; i++) {
    const day = preLastDay - i
    preDays.unshift(
      getItemDay({
        year: y,
        month: m,
        day,
        isPre: true
      })
    )
  }
  return preDays
}

/**
 * @description: 获取当月显示的下月天数(一共显示6行即42天)
 */
function getNextDays({ year, month }, daysLength) {
  const nextDays = []
  const fillLength = 42 - daysLength
  const m = month === 12 ? 1 : month + 1
  const y = month === 12 ? year + 1 : year

  for (let i = 1; i <= fillLength; i++) {
    nextDays.push(
      getItemDay({
        year: y,
        month: m,
        day: i,
        isNext: true
      })
    )
  }
  return nextDays
}

/**
 * @description: 获取一月所有的日期
 */
export function getMonthDays(opt) {
  let options = opt
  if (!options) {
    const now = new Date()
    options = {
      year: now.getFullYear(),
      month: now.getMonth() + 1
    }
  }
  // 当月月天数
  const currentDays = getCurrentDays(options)
  // 上月显示天数
  const preDays = getPreDays(options)
  // 下月显示天数
  const nextDays = getNextDays(options, currentDays.length + preDays.length)
  return [...preDays, ...currentDays, ...nextDays]
}
