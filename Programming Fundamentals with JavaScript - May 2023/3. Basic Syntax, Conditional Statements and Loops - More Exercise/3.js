function nextDay(year, month, day) {
  let nextDay = day + 1
  let nextMonth = month
  let nextYear = year.toString().length === 1 ? Number(`190${year}`) : year

  if((month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) && nextDay > 31) {
    nextDay = 1

    if(month === 12) {
      nextMonth = 1
      nextYear++
    } else {
      nextMonth++
    }
  } else if((month === 4 || month === 6 || month === 9 || month === 11) && nextDay > 30) {
    nextDay = 1
    nextMonth++
  } else if(month === 2 && year % 4 === 0 && nextDay > 29) {
    nextDay = 1
    nextMonth++
  } else if(month === 2 && year % 4 !== 0 && nextDay > 28) {
    nextDay = 1
    nextMonth++
  }

  console.log(`${nextYear}-${nextMonth}-${nextDay}`)
}

nextDay(2016, 9, 30)
