function vacationBooksList(input) {
  let pagesCount = Number(input[0])
  let pagesPerHour = Number(input[1])
  let daysToFinish = Number(input[2])

  let totalNumberOfHours = pagesCount / pagesPerHour
  let neededHoursPerDay = totalNumberOfHours / daysToFinish

  return neededHoursPerDay
}

console.log(vacationBooksList(["590", "50", "3"]))
