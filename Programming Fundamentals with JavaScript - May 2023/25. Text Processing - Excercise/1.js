function revealWords(words, template) {
  let replacementWords = words.split(', ').reduce((prev, cur) => {
    let newObj = {...prev}

    newObj[cur.length] = cur

    return newObj
  }, {})

  let result = template.split(' ').map(element => {
    if(element.includes('*')) {
      return replacementWords[element.length]
    } else {
      return element
    }
  })

  console.log(result.join(' '))
}

revealWords('great, learning', 'softuni is ***** place for ******** new programming languages')
