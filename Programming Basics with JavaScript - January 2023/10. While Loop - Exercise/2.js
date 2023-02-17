function exam(input) {
  let maxUnwantedMarks = Number(input[0])
  let numberOfUnwantedMarks = 0
  let marksSum = 0

  input.slice(1).forEach((element) => {
    if(!isNaN(Number(element))) {
      marksSum += Number(element)

      if(Number(element) <= 4){
        numberOfUnwantedMarks++
      }
    }
  })

  if(numberOfUnwantedMarks >= maxUnwantedMarks) {
    console.log(`You need a break, ${numberOfUnwantedMarks} poor grades.`)
  } else {
    console.log(`Average score: ${(marksSum / Math.floor(input.slice(1).length / 2)).toFixed(2)}`)
    console.log(`Number of problems: ${Math.floor(input.slice(1).length / 2)}`)
    console.log(`Last problem: ${input[input.length - 3]}`)
  }
}

exam([ "4", "Stone Age", "5", "Freedom", "5", "Storage", "3", "Enough" ])
