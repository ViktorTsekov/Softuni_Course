function storage(input) {
  let storage = new Map()

  for(el of input) {
    let [product, quantity] = el.split(" ")

    if(storage.has(product)) {
      storage.set(product, storage.get(product) + Number(quantity))
    } else {
      storage.set(product, Number(quantity))
    }
  }

  storage.forEach((value, key) => console.log(`${key} -> ${value}`))
}

storage(['tomatoes 10', 'coffee 5', 'olives 100', 'coffee 40'])
