function accountBalance(input) {
  let index = 0
  let sum = 0

  while(input[index] !== "NoMoreMoney" && index !== input.length) {
    let cur = Number(input[index])

    if(!isNaN(cur)) {
      if(cur < 0) {
        console.log("Invalid operation!")
      } else {
        sum += cur
        console.log("Increase:", cur.toFixed(2))
      }
    }

    index++
  }

  console.log("Total:", sum.toFixed(2))
}

accountBalance(["5.51", "69.42", "a", "NoMoreMoney", "100", "NoMoreMoney"])
