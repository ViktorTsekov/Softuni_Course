function replaceRepeatingChars(str) {
  let chars = []

  str.split('').forEach(element => {
    if(chars[chars.length - 1] !== element) {
      chars.push(element)
    }
  })
  
  console.log(chars.join(""))
}

replaceRepeatingChars('qqqwerqwecccwd')
