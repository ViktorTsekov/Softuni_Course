function traveling(input) {
  let destination = ""
  let minimalBudget = 0
  let moneyCollected = 0

  for(let i = 0; i < input.length; i++) {
    if(isNaN(Number(input[i]))) {
      if(destination.length !== 0 && moneyCollected >= minimalBudget) {
        console.log(`Going to ${destination}!`)
      }
      
      destination = input[i]
      minimalBudget = input[i + 1]
      moneyCollected = 0
      i++
    } else {
      moneyCollected += Number(input[i])
    }
  }
}

traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"])
