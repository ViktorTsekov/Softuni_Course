function trainTheTrainers(input) {
  let presentation = ""
  let markSum = 0
  let numberOfPresentations = 0
  let totalSum = 0
  let totalNumber = 0

  for(let i = 1; i < input.length; i++) {
    if(isNaN(Number(input[i]))) {
      if(presentation.length !== 0) {
        console.log(`${presentation} - ${(markSum / numberOfPresentations).toFixed(2)}.`)
        totalSum += markSum / numberOfPresentations
        totalNumber++
      }

      presentation = input[i]
      markSum = 0
      numberOfPresentations = 0
    } else {
      markSum += Number(input[i])
      numberOfPresentations++
    }
  }

  console.log(`Student's final assessment is ${(totalSum / totalNumber).toFixed(2)}.`)
}

trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"])
