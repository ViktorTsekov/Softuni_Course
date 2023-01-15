function depositCalculator(input) {
  let depositedSum = Number(input[0])
  let depositPeriod = Number(input[1])
  let yearlyInterestRate = Number(input[2]) / 100

  return depositedSum + depositPeriod * ((depositedSum * yearlyInterestRate) / 12)
}

console.log(depositCalculator(["200", "3", "5.7"]))
