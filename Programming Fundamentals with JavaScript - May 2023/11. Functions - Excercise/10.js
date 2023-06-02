function factorial(a, b) {
  let calcFactorial = (num) => {
    let sum = 1

    for(let i = 1; i <= num; i++) {
      sum *= i
    }

    return sum
  }

  let result = (calcFactorial(a) / calcFactorial(b)).toFixed(2)

  console.log(result)
}

factorial(5, 2)
