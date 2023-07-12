function armies(input) {
  let armies = {}

  input.forEach(element => {
    if(element.includes('arrives')) {
      let leader = element.split(" arrives")[0]

      armies[leader] = {}
      armies[leader]['armies'] = {}
      armies[leader]['maxArmies'] = 0
    } else if(element.includes(':')) {
      let leader = element.split(": ")[0]
      let army = element.split(": ")[1].split(", ")[0]
      let armyCount = Number(element.split(": ")[1].split(", ")[1])

      if(armies[leader] !== undefined) {
        armies[leader]['armies'][army] = armyCount
        armies[leader]['maxArmies'] += armyCount
      }
    } else if(element.includes('+')) {
      let army = element.split(" + ")[0]
      let armyCount = Number(element.split(" + ")[1])

      for(leader in armies) {
        if(armies[leader]['armies'][army] !== undefined) {
          armies[leader]['armies'][army] += armyCount
          armies[leader]['maxArmies'] += armyCount
        }
      }
    } else if(element.includes('defeated')) {
      let leader = element.split(" defeated")[0]

      if(armies[leader] !== undefined) {
        delete armies[leader]
      }
    }
  })

  let sortedArmies = {}

  Object.entries(armies).sort((a, b) => b[1]['maxArmies'] - a[1]['maxArmies']).forEach(el => sortedArmies[el[0]] = el[1])

  for(leader in sortedArmies) {
    let sorted = Object.entries(sortedArmies[leader]['armies']).sort((a, b) => b[1] - a[1]).reduce((prev, cur) => {
      let newObj = {...prev}

      newObj[cur[0]] = cur[1]

      return newObj
    }, {})

    console.log(`${leader}: ${sortedArmies[leader]['maxArmies']}`)

    for(army in sorted) {
      console.log(`>>> ${army} - ${sorted[army]}`)
    }
  }
}

armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])
