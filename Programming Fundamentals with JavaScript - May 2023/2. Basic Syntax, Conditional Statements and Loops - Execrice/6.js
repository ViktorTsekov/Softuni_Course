function printAndSum(a, b) {
  let sum = 0
  let result = ""

  for(let i = a; i <= b; i++) {
    result += i + " "
    sum += i
  }

  console.log(result)
  console.log("Sum:", sum)
}

printAndSum(5, 10)
