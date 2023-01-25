function journey(input) {
  let budget = Number(input[0])
  let season = input[1]
  let destination = ""
  let accommodation = ""
  let budgetSpent = 0

  if(budget <= 100) {
    destination = "Bulgaria"

    if(season === "summer") {
      accommodation = "Camp"
      budgetSpent = 0.3
    } else {
      accommodation = "Hotel"
      budgetSpent = 0.7
    }
  } else if(budget <= 1000) {
    destination = "Balkans"

    if(season === "summer") {
      accommodation = "Camp"
      budgetSpent = 0.4
    } else {
      accommodation = "Hotel"
      budgetSpent = 0.8
    }
  } else {
    destination = "Europe"
    accommodation = "Hotel"
    budgetSpent = 0.9
  }

  console.log(`Somewhere in ${destination}`)
  console.log(`${accommodation} - ${(budgetSpent * budget).toFixed(2)}`)
}

journey(["50", "summer"])
