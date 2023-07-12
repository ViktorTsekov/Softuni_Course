function cardGame(input) {
  const types = {
    S: 4,
    H: 3,
    D: 2,
    C: 1
  }

  const powers = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }

  let map = new Map()

  for(el of input) {
    let name = el.split(": ")[0]
    let cards = el.split(": ")[1].split(", ")

    if(map.has(name)) {
      cards.forEach(card => map.set(name, map.get(name).add(card)))
    } else {
      map.set(name, new Set(cards))
    }
  }

  map.forEach((value, key) => {
    let name = key
    let power = [...value.values()].reduce((prev, cur) => {
      let power = cur.charAt(0)
      let type = cur.charAt(1)

      if(Number(type) === 0) {
        power = 10
        type = cur.charAt(2)
      }
      
      if(isNaN(Number(power))) {
        power = powers[power]
      } else {
        power = Number(power)
      }

      type = types[type]

      return prev + power * type
    }, 0)

    console.log(`${name}: ${power}`)
  })
}

cardGame(['Peter: 2C, 4H, 9H, AS, QS', 'Tomas: 3H, 10S, JC, KD, 5S, 10S', 'Andrea: QH, QC, QS, QD', 'Tomas: 6H, 7S, KC, KD, 5S, 10C', 'Andrea: QH, QC, JS, JD, JC', 'Peter: JD, JD, JD, JD, JD, JD'])
