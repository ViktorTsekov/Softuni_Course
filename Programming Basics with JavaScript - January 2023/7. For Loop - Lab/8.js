function divisibleNumbers(input) {
  let sum = 0
  let numbers = []
  
  for(let i = Number(input[0]); i <= Number(input[1]); i++) {
    if(i % 9 === 0) {
      sum += i
      numbers.push(i)
    }
  }

  console.log(`The sum: ${sum}`)
  numbers.forEach(element => console.log(element))
}

divisibleNumbers(["100", "200"])
