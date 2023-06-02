function charactersInRange(a, b) {
  let start = 0
  let finish = 0
  let result = ""

  if(a.charCodeAt(0) < b.charCodeAt(0)) {
    start = a.charCodeAt(0)
    finish = b.charCodeAt(0)
  } else {
    start = b.charCodeAt(0)
    finish = a.charCodeAt(0)
  }

  for(let i = start + 1; i < finish; i++) {
    result += String.fromCharCode(i) + " "
  }

  console.log(result)
}

charactersInRange('#', ':')
