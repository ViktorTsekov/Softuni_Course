function checkSign(a, b, c) {
  let arr = [a, b, c]
  let negativeNumbers = 0

  arr.forEach(element => {
    if(element < 0) {
      negativeNumbers++
    }
  })

  if(negativeNumbers % 2 === 0) {
    console.log("Positive")
  } else {
    console.log("Negative")
  }
}

checkSign(5, 12, -15)
