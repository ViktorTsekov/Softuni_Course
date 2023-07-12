function travelTime(input) {
  let destinations = {}

  input.forEach(element => {
    let country = element.split(" > ")[0]
    let city = element.split(" > ")[1]
    let price = element.split(" > ")[2]

    if(destinations[country] === undefined) {
      destinations[country] = {}
      destinations[country][city] = `${price} `
    } else {
      if(Object.keys(destinations[country]).includes(city)) {
        destinations[country][city] += price + " "
      } else {
        destinations[country][city] = `${price} `
      }
    }
  })

  let sortedDestinations = {}
  
  Object.keys(destinations).sort((a, b) => a.localeCompare(b)).forEach((key) => sortedDestinations[key] = destinations[key])

  for(country in sortedDestinations) {
    let cities = Object.keys(sortedDestinations[country])

    cities.forEach((city) => {
      let price = destinations[country][city].split(" ").sort((a, b) => a - b)[1]

      if(price === '') {
        price = 0
      }

      destinations[country][city] = price
    })
  }

  for(country in sortedDestinations) {
    let sortedCities = {}
    let output = `${country} -> `

    Object.entries(sortedDestinations[country]).sort((a, b) => a[1] - b[1]).forEach((el) => {
      sortedCities[el[0]] = el[1]
    })

    Object.keys(sortedCities).forEach(city => {
      let price = sortedDestinations[country][city]
      
      output += `${city} -> ${price} `
    })

    console.log(output)
  }
}

//travelTime(["Bulgaria > Sofia > 500", "Bulgaria > Sopot > 800", "France > Paris > 2000", "Albania > Tirana > 1000", "Bulgaria > Sofia > 200"])
travelTime(['Bulgaria > Sofia > 25000', 'Bulgaria > Sofia > 25000', 'Kalimdor > Orgrimar > 0', 'Albania > Tirana > 25000', 'Bulgaria > Varna > 25010', 'Bulgaria > Lukovit > 10'])
