function integerAndFloat(num1, num2, num3) {
  const sum = num1 + num2 + num3
  const type = Number.isInteger(sum) ? "Integer" : "Float"

  console.log(`${sum} - ${type}`)
}

integerAndFloat(1, 2, 3.2)
