function wordsTracker(input) {
  let map = new Map()

  let wordsWeAreLookingFor = input[0].split(' ')
  let words = input.slice(1)

  wordsWeAreLookingFor.forEach(element => {
    map.set(element, 0)
  })

  words.forEach(word => {
    if(map.has(word)) {
      map.set(word, map.get(word) + 1)
    }
  })

  let sortedMap = [...map.entries()].sort((a, b) => b[1] - a[1]).reduce((prev, cur) => {
    return prev.set(cur[0], cur[1])
  }, new Map())

  sortedMap.forEach((value, key) => console.log(`${key} - ${value}`))
}

wordsTracker(['this sentence', 'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])
