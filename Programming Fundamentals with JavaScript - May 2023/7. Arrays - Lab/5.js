function sumEvenNumbers(array) {
  console.log(array.map(el => Number(el)).filter(el => el % 2 === 0).reduce((previous, current) => {
    return previous + current
  }, 0))
}

sumEvenNumbers(['1','2','3','4','5','6'] )
