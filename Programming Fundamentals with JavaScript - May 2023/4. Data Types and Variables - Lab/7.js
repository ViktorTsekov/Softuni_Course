function requiredReading(pagesNumber, pagesPerHour, numberOfDays) {
  const timeToRead = pagesNumber / pagesPerHour
  const requiredHoursPerDay = timeToRead / numberOfDays

  console.log(requiredHoursPerDay)
}

requiredReading(212, 20, 2)
