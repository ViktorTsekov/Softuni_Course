function onTime(input) {
  let timeOfTheExam = Number(input[0]) * 60 + Number(input[1])
  let timeOfArrival = Number(input[2]) * 60 + Number(input[3])
  
  let convertMinutesToHours = (minutes) => {
    if(minutes < 60) {
      return `${minutes}`
    } else {
      return `${Math.floor(minutes / 60)}:${minutes % 60}${minutes % 60 < 10 ? '0' : ''}`
    }
  }

  let determineMinutesOrHours = (minutes) => {
    return `${minutes < 60 ? 'minutes' : 'hours'}`
  }

  if(timeOfArrival > timeOfTheExam) {
    let result = timeOfArrival - timeOfTheExam

    console.log("Late")
    console.log(`${convertMinutesToHours(result)} ${determineMinutesOrHours(result)} after the start`)
  } else {
    let result = timeOfTheExam - timeOfArrival
    
    if(result <= 30) {
      console.log("On time")

      if(result !== 0) {
        console.log(`${convertMinutesToHours(result)} ${determineMinutesOrHours(result)} before the start`)
      }
    } else {
      console.log("Early")
      console.log(`${convertMinutesToHours(result)} ${determineMinutesOrHours(result)} before the start`)
    }
  }
}

onTime(["13", "55", "14", "5"])
