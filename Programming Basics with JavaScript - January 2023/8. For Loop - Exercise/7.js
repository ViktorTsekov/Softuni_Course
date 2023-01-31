function trekkingMania(input) {
  let totalNumberOfClimbers = 0
  let climbers = input.slice(1)
  let hillsInfo = {
    "Musala": 0,
    "Monblan": 0,
    "Cilimandjaro": 0,
    "K2": 0,
    "Everest": 0,
  }

  climbers.forEach(element => {
    let n = Number(element)

    if(n <= 5) {
      hillsInfo.Musala = hillsInfo.Musala + n
    } else if(n <= 12) {
      hillsInfo.Monblan = hillsInfo.Monblan + n
    } else if(n <= 25) {
      hillsInfo.Cilimandjaro = hillsInfo.Cilimandjaro + n
    } else if(n <= 40) {
      hillsInfo.K2 = hillsInfo.K2 + n
    } else {
      hillsInfo.Everest = hillsInfo.Everest + n
    }

    totalNumberOfClimbers += n
  })

  console.log((hillsInfo.Musala / totalNumberOfClimbers * 100).toFixed(2) + "%")
  console.log((hillsInfo.Monblan / totalNumberOfClimbers * 100).toFixed(2) + "%")
  console.log((hillsInfo.Cilimandjaro / totalNumberOfClimbers * 100).toFixed(2) + "%")
  console.log((hillsInfo.K2 / totalNumberOfClimbers * 100).toFixed(2) + "%")
  console.log((hillsInfo.Everest / totalNumberOfClimbers * 100).toFixed(2) + "%")
}

trekkingMania(["5", "25", "41", "31", "250", "6"])
