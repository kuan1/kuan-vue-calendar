/*
 * @Description: 当月显示部分上月和部分下月的天数
 */

/**
 * @description: 获取当月天数
 */
function getCurrentDays({ year, month }) {
  const lastDay = new Date(year, month, 0).getDate()
  const currentDays = []
  for (let i = 1; i <= lastDay; i++) {
    currentDays.push({
      day: i
    })
  }
  return currentDays
}

/**
 * @description: 获取当月显示的上月天数
 */
function getPreDays({ year, month }) {
  const preDays = []
  const firstDay = new Date(year, month - 1, 1).getDate()
  const preLastDay = new Date(year, month - 1, 0).getDate()
  if (firstDay === 7) return []
  for (let i = 0; i < firstDay; i++) {
    preDays.unshift({
      day: preLastDay - i,
      isPre: true
    })
  }
  return preDays
}

/**
 * @description: 获取当月显示的下月天数(一共显示6行即42天)
 */
function getNextDays(daysLength) {
  const nextDays = []
  const fillLength = 42 - daysLength
  for (let i = 1; i <= fillLength; i++) {
    nextDays.push({
      day: i,
      isNext: true
    })
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
  // 上月天数
  const currentDays = getCurrentDays(options)
  const preDays = getPreDays(options)
  const nextDays = getNextDays(currentDays.length + preDays.length)
  return [...preDays, ...currentDays, ...nextDays]
}
