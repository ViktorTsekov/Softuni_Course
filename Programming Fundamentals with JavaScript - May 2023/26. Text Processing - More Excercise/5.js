function treasureFinder(arr) {
  let key = arr.shift().split(' ')
  let messages = arr
  let re = /&(?<treasure>[A-Za-z]+)&.*<(?<coord>[\w]+)>/

  messages.forEach(message => {
    if(message !== 'find') {
      let decryptedMessage = ''
      let keyIndex = 0

      message.split('').forEach(letter => {
        let asciiValue = letter.charCodeAt(0) - Number(key[keyIndex])

        decryptedMessage += String.fromCharCode(asciiValue)
        keyIndex++

        if(keyIndex >= key.length) {
          keyIndex = 0
        }
      })

      let match = re.exec(decryptedMessage)

      if(match !== null) {
        let treasure = match.groups.treasure
        let coordinates = match.groups.coord

        console.log(`Found ${treasure} at ${coordinates}`)
      }
    }
  })
}

treasureFinder(["1 2 1 3", "ikegfp'jpne)bv=41P83X@", "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", "find"])
