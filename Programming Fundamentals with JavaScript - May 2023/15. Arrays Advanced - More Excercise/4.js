function jansNotation(input) {
  let operands = []
  let notEnoughOperands = false

  input.forEach(element => {
    if(isNaN(parseInt(element))) {
      let a = operands.pop()
      let b = operands.pop()
      let result = 0

      if(a === undefined || b === undefined) {
        notEnoughOperands = true
      } else {
        switch(element) {
          case '+': result = b + a; break;
          case '-': result = b - a; break;
          case '*': result = b * a; break;
          case '/': result = b / a; break;
        }

        operands.push(result)
      }
    } else {
      operands.push(element)
    }
  })

  if(notEnoughOperands === true) {
    console.log("Error: not enough operands!")
  } else {
    if(operands.length === 1) {
      console.log(operands[0])
    } else {
      console.log("Error: too many operands! ")
    }
  }
}

jansNotation([-1, 1, '+', 101, '*', 18, '+', 3, '/'] )
