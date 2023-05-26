function dungeonestDark(input) {
  let currentHealth = 100
  let currentCoins = 0
  let bestRoom = 1

  input[0].split("|").forEach((room, index) => {
    const item = room.split(" ")[0]
    const itemValue = Number(room.split(" ")[1])

    if(currentHealth > 0) {
      if(item === "potion") {
        let newHealth = currentHealth + itemValue
        let healedValue = 0

        if(newHealth > 100) {
          healedValue = 100 - currentHealth
          currentHealth = 100
        } else {
          healedValue = itemValue
          currentHealth = newHealth
        }

        console.log(`You healed for ${healedValue} hp.`)
        console.log(`Current health: ${currentHealth} hp.`)
      } else if(item === "chest") {
        currentCoins += itemValue

        console.log( `You found ${itemValue} coins.`)
      } else {
        currentHealth -= itemValue

        if(currentHealth > 0) {
          console.log(`You slayed ${item}.`)
        } else {
          console.log(`You died! Killed by ${item}.`)
          bestRoom = index + 1
        }
      }
    }
  })

  if(currentHealth <= 0) {
    console.log(`Best room: ${bestRoom}`)
  } else {
    console.log("You've made it!")
    console.log(`Coins: ${currentCoins}`)
    console.log(`Health: ${currentHealth}`)
  }
}

dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
