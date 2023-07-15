function softuniBar(input) {
  let pattern = /%(?<name>[A-Z][a-z]+)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<count>\d+)\|[^|$%.]*?(?<price>\d+[.]?\d*)\$/g
  let i = 0
  let currentLine = input[i]
  let result = 0

  while(currentLine !== 'end of shift') {
    let match = [...currentLine.matchAll(pattern)]

    for(el of match) {
      let name = el.groups.name
      let product = el.groups.product
      let prices = Number(el.groups.count) * Number(el.groups.price)

      result += prices
      console.log(`${name}: ${product} - ${prices.toFixed(2)}`)
    }

    i++
    currentLine = input[i]
  }

  console.log(`Total income: ${result.toFixed(2)}`)
}

softuniBar(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift'])
