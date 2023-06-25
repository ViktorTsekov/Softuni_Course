function dictionary(input) {
  let dictionary = []

  for(entry of input) {
    let obj = JSON.parse(entry)
    let key = Object.keys(obj)[0]
    let dicIndex = dictionary.findIndex(e => {
      for(dicKey in e) {
        return dicKey === key
      }
    })

    if(dicIndex === -1) {
      dictionary.push(obj)
    } else {
      dictionary[dicIndex] = obj
    }
  }

  dictionary.sort((a, b) => {
    let aKey = Object.keys(a)[0]
    let bKey = Object.keys(b)[0]

    return aKey.localeCompare(bKey)
  })

  for(entry of dictionary) {
    for(key in entry) {
      console.log(`Term: ${key} => Definition: ${entry[key]}`)
    }
  }
}

dictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}', '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}', '{"Boiler":"A fuel-burning apparatus or container for heating water."}', '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}', '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'])
