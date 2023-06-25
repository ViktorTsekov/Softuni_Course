function catalogue(input) {
  let catalogue = []

  for(item of input) {
    let name = item.split(" : ")[0]
    let price = Number(item.split(" : ")[1])
    let obj = {}

    obj[name] = price
    catalogue.push(obj)
  }

  catalogue.sort((a, b) => {
    let aKey = Object.keys(a)[0]
    let bKey = Object.keys(b)[0]

    return aKey.localeCompare(bKey)
  })

  let usedLetters = ""

  catalogue.forEach(el => {
    for(key in el) {
      let letter = key[0]

      if(!usedLetters.includes(letter)) {
        usedLetters += letter
        console.log(letter)
        console.log(` ${key}: ${el[key]}`)
      } else {
        console.log(` ${key}: ${el[key]}`)
      }
    }
  })
}

catalogue(['Appricot : 20.4', 'Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15', 'T-Shirt : 10'])
