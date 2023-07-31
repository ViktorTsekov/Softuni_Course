function serializeString(input) {
  let text = input[0]
  let letterMatches = {}
  
  text.split('').forEach((element, index) => {
    if(letterMatches[element] === undefined) {
      letterMatches[element] = index + '/'
    } else {
      letterMatches[element] += index + '/'
    }
  })
  
  for(key in letterMatches) {
    console.log(`${key}:${letterMatches[key].slice(0, letterMatches[key].length - 1)}`)
  }
}

serializeString(["abababa"])
