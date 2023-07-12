function addressBook(input) {
  let addresses = {}

  for(el of input) {
    let [name, address] = el.split(":")

    addresses[name] = address
  }

  let sortedKeys = Object.keys(addresses).sort((a, b) => {
    return a.localeCompare(b)
  })
  let sortedAddresses = {}

  sortedKeys.forEach(key => sortedAddresses[key] = addresses[key])

  for(key in sortedAddresses) {
    console.log(`${key} -> ${sortedAddresses[key]}`)
  }
}

addressBook(['Tim:Doe Crossing', 'Bill:Nelson Place', 'Peter:Carlyle Ave', 'Bill:Ornery Rd'])
