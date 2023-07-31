function deserializeString(input) {
  let word = []

  for(line of input) {
    if(line !== 'end') {
      let letter = line.split(':')[0]
      let indexes = line.split(':')[1].split('/')

      for(index of indexes) {
        word[Number(index)] = letter
      }
    }
  }

  console.log(word.join(''))
}

deserializeString(['a:0/2/4/6', 'b:1/3/5', 'end'])
