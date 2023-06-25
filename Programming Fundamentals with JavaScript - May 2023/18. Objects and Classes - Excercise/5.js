function inventory(input) {
  let heroes = []

  for(hero of input) {
    let name = hero.split(" / ")[0]
    let level = hero.split(" / ")[1]
    let inventory = hero.split(" / ")[2]

    heroes.push({
      name,
      level,
      inventory
    })
  }
  
  heroes.sort((a, b) => Number(a.level) - Number(b.level))

  heroes.forEach(hero => {
    console.log("Hero:", hero.name)
    console.log("level =>", hero.level)
    console.log("items =>", hero.inventory)
  })
}

inventory(['Isacc / 25 / Apple, GravityGun', 'Derek / 12 / BarrelVest, DestructionSword', 'Hes / 1 / Desolator, Sentinel, Antara'])
