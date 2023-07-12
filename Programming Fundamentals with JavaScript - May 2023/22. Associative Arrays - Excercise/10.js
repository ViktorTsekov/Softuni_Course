function legendaryFarming(input) {
  let inputArr = input.split(" ")
  let resources = {
    "shards": 0,
    "fragments": 0,
    "motes": 0
  }
  let junk = {}

  for(let i = 0; i < inputArr.length; i += 2) {
    let quantity = Number(inputArr[i])
    let resource = inputArr[i + 1].toLowerCase()

    if(resource === "shards" || resource === "fragments" || resource === "motes") {
      resources[resource] += quantity

      if(resources["shards"] >= 250) {
        resources["shards"] -= 250
        console.log("Shadowmourne obtained!")
        break
      }
    
      if(resources["fragments"] >= 250) {
        resources["fragments"] -= 250
        console.log("Valanyr obtained!")
        break
      }
    
      if(resources["motes"] >= 250) {
        resources["motes"] -= 250
        console.log("Dragonwrath obtained!")
        break
      }
    } else {
      if(junk[resource] === undefined) {
        junk[resource] = quantity
      } else {
        junk[resource] += quantity
      }
    }
  }

  let sortedResources = {}
  let sortedJunk = {}

  Object.entries(resources).sort((a, b) => {
    if(a[1] === b[1]) {
      return a[0].localeCompare(b[0])
    } else {
      return b[1] - a[1]
    }
  }).forEach(el => sortedResources[el[0]] = el[1])

  Object.keys(junk).sort((a, b) => a.localeCompare(b)).forEach(key => sortedJunk[key] = junk[key])

  for(key in sortedResources) {
    console.log(`${key}: ${sortedResources[key]}`)
  }

  for(key in sortedJunk) {
    console.log(`${key}: ${sortedJunk[key]}`)
  }
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')
