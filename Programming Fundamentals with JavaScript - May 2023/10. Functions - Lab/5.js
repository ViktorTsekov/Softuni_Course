function simpleCalculator(a, b, operation) {
  let result = 0

  switch(operation) {
    case "add": result = a + b; break;
    case "subtract": result = a - b; break;
    case "multiply": result = a * b; break;
    case "divide": result = a / b; break;
  }

  console.log(result)
}

simpleCalculator(5, 5, 'multiply')
