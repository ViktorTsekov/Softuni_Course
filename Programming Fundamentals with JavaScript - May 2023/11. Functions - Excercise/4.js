function oddAndEvenSum(num) {
  let oddSum = 0
  let evenSum = 0

  num.toString().split("").map(element => Number(element)).forEach(element => {
    if(element % 2 !== 0) {
      oddSum += element
    } else {
      evenSum += element
    }
  })

  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)
}

oddAndEvenSum(1000435)
