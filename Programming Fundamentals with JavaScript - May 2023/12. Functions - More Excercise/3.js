function pointsModification(input) {
  function getDistance(x1, y1, x2, y2) {
    let y = x2 - x1
    let x = y2 - y1
    
    return Math.sqrt(x * x + y * y)
  }

  let distanceFromP1ToCartesian = getDistance(input[0], input[1], 0, 0)
  let distanceFromP2ToCartesian = getDistance(input[2], input[3], 0, 0)
  let distanceFromP1ToP2 = getDistance(input[0], input[1], input[2], input[3])

  console.log(`{${input[0]}, ${input[1]}} to {0, 0} is ${Number.isInteger(distanceFromP1ToCartesian) ? "valid" : "invalid"}`)
  console.log(`{${input[2]}, ${input[3]}} to {0, 0} is ${Number.isInteger(distanceFromP2ToCartesian) ? "valid" : "invalid"}`)
  console.log(`{${input[0]}, ${input[1]}} to {${input[2]}, ${input[3]}} is ${Number.isInteger(distanceFromP1ToP2) ? "valid" : "invalid"}`)
}

pointsModification([3, 0, 0, 4])
