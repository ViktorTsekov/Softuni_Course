function city(obj) {
  let keys = Object.keys(obj)

  for(let i = 0; i < keys.length; i++) {
    console.log(`${keys[i]} -> ${obj[keys[i]]}`)
  }
}

city({ name: "Plovdiv", area: 389, population: 1162358, country: "Bulgaria", postCode: "4000" })
