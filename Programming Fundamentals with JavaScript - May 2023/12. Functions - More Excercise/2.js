function numberModification(n) {
  let number = n.toString()

  let calcAverage = (n) => {
    let sum = n.toString().split("").map(e => Number(e)).reduce((previous, current) => {
      return previous + current
    }, 0)
    
    return sum / n.toString().split("").length
  }

  while(calcAverage(number) < 5) {
    number += "9"
  }

  console.log(number)
}

numberModification(101)
