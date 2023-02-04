function graduation(input) {
  let index = 1
  let average = 0

  while (index <= input.length - 1) {
    if(Number(input[index]) < 4.00) {
      console.log(`${input[0]} has been excluded at ${index} grade`)
      return
    }

    average += Number(input[index])
    index++
  }

  console.log(`${input[0]} graduated. Average grade: ${(average / (input.length - 1)).toFixed(2)}`)
}

// graduation(["Gosho", "5", "5.5", "6","5.43", "5.5", "6", "5.55", "5", "6", "6", "5.43", "5"])
graduation(["Mimi", "5", "6", "5", "6", "5", "6", "6", "2", "3"])
