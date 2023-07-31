function heroRecruitment(input) {
  let heroes = {}

  for(command of input) {
    if(command.includes('Enroll')) {
      let heroName = command.split(' ')[1]

      if(heroes[heroName] === undefined) {
        heroes[heroName] = []
      } else {
        console.log(`${heroName} is already enrolled.`)
      }
    } else if(command.includes('Learn')) {
      let heroName = command.split(' ')[1]
      let spellName = command.split(' ')[2]

      if(heroes[heroName] !== undefined) {
        let spells = heroes[heroName]

        if(!spells.includes(spellName)) {
          spells.push(spellName)
          heroes[heroName] = spells
        } else {
          console.log(`${heroName} has already learnt ${spellName}.`)
        }
      } else {
        console.log(`${heroName} doesn't exist.`)
      }
    } else if(command.includes('Unlearn')) {
      let heroName = command.split(' ')[1]
      let spellName = command.split(' ')[2]

      if(heroes[heroName] !== undefined) {
        let spells = heroes[heroName]
        let spellIndex = spells.indexOf(spellName)

        if(spellIndex !== -1) {
          spells.splice(spellIndex, 1)
          heroes[heroName] = spells
        } else {
          console.log(`${heroName} doesn't know ${spellName}.`)
        }
      } else {
        console.log(`${heroName} doesn't exist.`)
      }
    } else if(command.includes('End')) {
      console.log('Heroes:')

      for(hero in heroes) {
        let spells = heroes[hero]

        console.log(`== ${hero}: ${spells.join(', ')}`)
      }
    }
  }
}

heroRecruitment(["Enroll Stefan", "Learn Stefan ItShouldWork", "Learn Stefan ItShouldWork", "Unlearn Stefan NotFound", "End"])
