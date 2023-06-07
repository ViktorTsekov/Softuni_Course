function listOfProducts(arr) {
  arr.sort((a, b) => {
    if(a === b) {
      return 0
    }

    return a < b ? -1 : 1
  })

  arr.forEach((element, index) => {
    console.log(`${index + 1}.${element}`)
  })
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples'])
