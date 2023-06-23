function convertToObject(str) {
  let obj = JSON.parse(str)

  Object.keys(obj).forEach(key => {
    console.log(`${key}: ${obj[key]}`)
  })
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')
