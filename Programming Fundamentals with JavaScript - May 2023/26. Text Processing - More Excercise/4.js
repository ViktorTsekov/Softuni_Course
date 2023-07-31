function asciiSumator(input) {
  let boundaries = [input[0].charCodeAt(0), input[1].charCodeAt(0)].sort((a, b) => a - b)
  let str = input[2]
  let sum = 0

  str.split('').forEach(element => {
    let lowerBoundary = boundaries[0]
    let upperBoundary = boundaries[1]
    let asciiValue = element.charCodeAt(0)

    if(asciiValue > lowerBoundary && asciiValue < upperBoundary) {
      sum += asciiValue
    }
  })

  console.log(sum)
}

asciiSumator(['?', 'E', '@ABCEF'])
