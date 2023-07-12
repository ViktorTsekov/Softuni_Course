function censoredWords(str, word) {
  let newStr = str.split(word)

  console.log(newStr.join("*".repeat(word.length)))
}

censoredWords('A small sentence with small some words', 'small')
