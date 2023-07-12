function wordOccurrences(input) {
  let words = new Map()

  for(word of input) {
    if(words.has(word)) {
      words.set(word, words.get(word) + 1)
    } else {
      words.set(word, 1)
    }
  }

  let sortedWords = [...words.entries()].sort((a, b) => b[1] - a[1])

  sortedWords.forEach(el => {
    let key = el[0]
    let value = el[1]

    console.log(`${key} -> ${value} times`)
  })
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])
