function stringSubstring(word, text) {
  if(text.toLowerCase().split(' ').indexOf(word.toLowerCase()) !== -1) {
    console.log(word)
  } else {
    console.log(`${word} not found!`)
  }
}

stringSubstring('javascript', 'JavaScript is the best programming language')
