function garage(input) {
  let cars = {}

  input.forEach(element => {
    let key = Number(element.split(' - ')[0])
    let details = element.split(' - ')[1]

    if(cars[key] === undefined) {
      cars[key] = [details]
    } else {
      cars[key].push(details)
    }
  })

  let sortedCars = {}
  
  Object.keys(cars).sort((a, b) => a - b).forEach(key => sortedCars[key] = cars[key])

  for(key in cars) {
    console.log(`Garage № ${key}`)
    cars[key].forEach(el => console.log(`--- ${el.replace(/:/g, ' -')}`))
  }
}

garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])
