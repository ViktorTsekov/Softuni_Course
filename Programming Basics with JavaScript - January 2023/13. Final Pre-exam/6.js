function multiplicationTable(input) {
  let n = input[0]

  let firstDigit = Number(n[2])
  let secondDigit = Number(n[1])
  let thirdDigit = Number(n[0])

  for(let i = 1; i <= firstDigit; i++) {
    for(let j = 1; j <= secondDigit; j++) {
      for(let k = 1; k <= thirdDigit; k++) {
        console.log(`${i} * ${j} * ${k} = ${i * j * k};`)
      }
    }
  }
}

multiplicationTable(["324"])
