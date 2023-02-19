function bestPlayer(input) {
  let playerName = ""
  let maxGoals = 0
  let array = input.filter(el => el !== "END")

  for(let i = 0; i < array.length; i += 2) {
    if(Number(array[i + 1]) > maxGoals) {
      playerName = array[i]
      maxGoals = Number(array[i + 1])
    }
  }

  console.log(`${playerName} is the best player!`)

  if(maxGoals >= 3) {
    console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`)
  } else {
    console.log(`He has scored ${maxGoals} goals.`)
  }
}

bestPlayer(["Silva", "5", "Harry Kane", "10"])
