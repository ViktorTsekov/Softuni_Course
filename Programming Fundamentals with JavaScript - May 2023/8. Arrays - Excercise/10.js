function ladybugs(input) {
  let field = []
  let fieldSize = input[0]
  let ladybugsPositions = input[1]
  let commands = input.slice(2)

  for(let i = 0; i < fieldSize; i++) {
    if(ladybugsPositions.includes(i.toString())) {
      field.push("1")
    } else {
      field.push("0")
    }
  }

  commands.forEach(command => {
    let startingPoint = Number(command.split(" ")[0])
    let direction = command.split(" ")[1]
    let flyLength = Number(command.split(" ")[2])

    let newIndex = startingPoint
    let sign = direction === "right" ? 1 : -1
    
    while(newIndex >= 0 && newIndex < field.length) {
      newIndex = newIndex + (sign * flyLength)

      if(field[newIndex] === "0") {
        field[startingPoint] = "0"
        field[newIndex] = "1"
        break
      }
    }

    field[startingPoint] = "0"
  })

  console.log(...field)
}

ladybugs([3, '0 1', '0 right 1', '2 right 1'])
