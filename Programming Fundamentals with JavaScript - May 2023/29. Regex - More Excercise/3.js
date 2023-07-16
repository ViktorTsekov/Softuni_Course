function postOffice(input) {
  let inputParts = input[0].split('|')
  let lettersRegex = /([#$%*&])[A-Z]+\1/g
  let numbersRegex = /[1-9][0-9]:(?:0[1-9]|[1-9][1-9])/g

  let lettersMatch = inputParts[0].match(lettersRegex)[0]
  let numbersMatch = inputParts[1].match(numbersRegex)
  let result = []

  inputParts[2].split(' ').forEach(word => {
    if(lettersMatch.includes(word[0])) {
      numbersMatch.forEach(el => {
        let letter = String.fromCharCode(Number(el.split(':')[0]))
        let wordLength = Number(el.split(':')[1]) + 1

        if(letter === word[0] && wordLength === word.length) {
          if(!result.includes(word)) {
            result.push(word)
          }
        }
      })
    }
  })

  console.log(result.join('\n'))
}

postOffice(['"Message.TO$#POAML#|readData79:05:79:0!2reme80:03--23:11{79:05}tak{65:11ar}!77:!23--)77:05ACCSS76:05ad|Remedy Por Ostream :Istream Post sOffices Office Of Ankh-Morpork MR.LIPWIG Mister Lipwig'])
