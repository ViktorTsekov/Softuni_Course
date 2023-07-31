function specialWords(str) {
  let specialWords = []

  str.split(' ').forEach(element => {
    if(element.includes('#')) {
      if(/^[A-Za-z]+$/.exec(element.replace('#', '')) !== null) {
        specialWords.push(element.replace('#', ''))
      }
    }
  })

  console.log(specialWords.join('\n'))
}

specialWords('Nowadays everyone uses # to tag a #special word in #socialMedia')
