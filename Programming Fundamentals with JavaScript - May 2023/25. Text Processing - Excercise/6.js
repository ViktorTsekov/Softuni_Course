function pascalCaseSplitter(str) {
  let newStr = ''

  str.split('').forEach(element => {
    if(element === element.toUpperCase()) {
      if(newStr !== '') {
        newStr += ' ' + element
      } else {
        newStr += element
      }
    } else {
      newStr += element
    }
  })

  console.log(newStr.replace(/\s/g, ', '))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
