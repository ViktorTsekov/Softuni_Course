// Here the definitions for x and y coordinates have been swapped as we are iterating the matrix column first and row latter, rather than the traditional way of row first and column latter.
// This is required by condition!
function rosettaStone(input) {
  let yTemplateLength = Number(input[0])
  let template = input.slice(1, yTemplateLength + 1)
  let xTemplateLength = template[0].split(" ").length
  let encodedMatrix = input.slice(yTemplateLength + 1)
  let encodedMatrixLength = encodedMatrix.length
  let decodedMatrix = Array(encodedMatrixLength).fill().map(()=>Array(encodedMatrixLength).fill(''))

  let xOffset = 0
  let yOffset = 0

  let lettersDecoded = 0

  while(lettersDecoded < encodedMatrixLength * encodedMatrixLength) {
    let xBoundary = xTemplateLength
    let yBoundary = yTemplateLength

    if(xOffset + xTemplateLength > encodedMatrixLength) {
      xBoundary = xOffset + xTemplateLength - encodedMatrixLength
    }

    if(yOffset + yTemplateLength > encodedMatrixLength) {
      yBoundary = yOffset + yTemplateLength - encodedMatrixLength
    }

    for(let j = 0; j < yBoundary; j++) {
      let encodedMatrixRow = encodedMatrix[yOffset + j].split(" ")
      let templateRow = template[j].split(" ")

      for(let i = 0; i < xBoundary; i++) {
        	let encodedMatrixElement = encodedMatrixRow[xOffset + i]
          let templateElement = templateRow[i]
          let letterCodeValue = (Number(encodedMatrixElement) + Number(templateElement)) % 27
          let letter = ""

          if(letterCodeValue === 0) {
            letter = " "
          } else {
            letter = String.fromCharCode(64 + letterCodeValue)
          }

          decodedMatrix[yOffset + j][xOffset + i] = letter
          lettersDecoded++
      }
    }

    xOffset += xTemplateLength

    if(xOffset >= encodedMatrixLength) {
      xOffset = 0
      yOffset += yTemplateLength
    }
  }

  let finalMessage = ""

  for(let i = 0; i < decodedMatrix.length; i++) {
    finalMessage += decodedMatrix[i].join("")
  }

  console.log(finalMessage)
}

//rosettaStone(['2', '59 36', '82 52', '4 18 25 19 8', '4 2 8 2 18', '23 14 22 0 22', '2 17 13 19 20', '0 9 0 22 22'])
//rosettaStone(['2', '31 32', '74 37', '19 0 23 25', '22 3 12 17', '5 9 23 11', '12 18 10 22' ])
rosettaStone(['1', '1 3 13', '12 22 14 13 25 0 4 24 23', '18 24 2 25 22 0 0 11 18', '8 25 6 26 8 23 13 4 14', '14 3 14 10 6 1 6 16 14', '11 12 2 10 24 2 13 24 0', '24 24 10 14 15 25 18 24 12', '4 24 0 8 4 22 19 22 14', '0 11 18 26 1 19 18 13 15', '8 15 14 26 24 14 26 24 14'])
