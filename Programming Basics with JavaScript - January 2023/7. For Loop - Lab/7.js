function sumOfNumbers(input) {
  let sum = 0

  input[0].split("").forEach(element => sum += Number(element))
  console.log(`The sum of the digits is:${sum}`)
}

sumOfNumbers(["1234"])
