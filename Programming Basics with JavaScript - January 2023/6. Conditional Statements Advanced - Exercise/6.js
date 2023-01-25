function operationsBetweenNumbers(input) {
  let a = Number(input[0])
  let b = Number(input[1])
  let operation = input[2]
  let result = 0
  let evenOdd = ""

  if(b === 0 && (operation === "/" || operation === "%")) {
    console.log(`Cannot divide ${a} by zero`)
    return
  }

  switch(operation) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = (a / b).toFixed(2); break;
    case "%": result = a % b; break;
  }

  if(result % 2 === 0) {
    evenOdd = "even"
  } else {
    evenOdd = "odd"
  }
  
  if(operation === "/" || operation === "%") {
    console.log(`${a} ${operation} ${b} = ${result}`)
  } else {
    console.log(`${a} ${operation} ${b} = ${result} - ${evenOdd}`)
  }
}

operationsBetweenNumbers(["123", "2", "*"])
