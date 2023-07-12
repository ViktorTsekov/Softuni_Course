function countOccurrences(str, word) {
  let count = 0

  str.split(" ").forEach(element => {
    if(element === word) {
      count++
    }
  })

  console.log(count)
}

countOccurrences('This is a word and it also is a sentence', 'is')
