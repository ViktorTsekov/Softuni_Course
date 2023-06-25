function store(stock, orderedProducts) {
  let products = {}

  for(let i = 0; i < stock.length; i += 2) {
    let name = stock[i]
    let quantity = stock[i + 1]

    products[name] = quantity
  }

  for(let i = 0; i < orderedProducts.length; i += 2) {
    let name = orderedProducts[i]
    let quantity = orderedProducts[i + 1]

    if(products[name] === undefined) {
      products[name] = quantity
    } else {
      let newQuantity = Number(products[name]) + Number(quantity)
      
      products[name] = newQuantity
    }
  }

  for(key in products) {
    console.log(`${key} -> ${products[key]}`)
  }
}

store(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2' ], ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])
