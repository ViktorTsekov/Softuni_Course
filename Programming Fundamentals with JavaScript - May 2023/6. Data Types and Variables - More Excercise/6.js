function chessBoard(n) {
  let result = `<div class="chessboard">\n`
  let spacesNeeded = 2
  
  for(let i = 0; i < n; i++) {
    let spaces = ""

    for(let j = 0; j < spacesNeeded; j++) {
      spaces += " "
    }

    result += spaces + "<div>\n"

    for(let j = 0; j < n; j++) {
      let spaces = ""

      for(let k = 0; k < spacesNeeded + spacesNeeded; k++) {
        spaces += " "
      }

      if(i % 2 === 0) {
        if(j % 2 === 0) {
          result += spaces + `<span class="black"></span>\n`
        } else {
          result += spaces + `<span class="white"></span>\n`
        }
      } else {
        if(j % 2 === 0) {
          result += spaces + `<span class="white"></span>\n`
        } else {
          result += spaces + `<span class="black"></span>\n`
        }
      }
      
    }

    result += spaces + "</div>\n"
  }

  result += "</div>"
  console.log(result)
}

chessBoard(3)
