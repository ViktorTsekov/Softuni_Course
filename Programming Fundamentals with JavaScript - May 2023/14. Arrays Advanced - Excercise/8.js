function arrayManipulator(arr, commands) {
  let newArr = arr

  commands.forEach(command => {
    let commandSegments = command.split(" ")

    if(commandSegments[0] === "add") {
      newArr.splice(commandSegments[1], 0, Number(commandSegments[2]))
    } else if(commandSegments[0] === "addMany") {
      newArr.splice(commandSegments[1], 0, ...commandSegments.slice(2).map(el => Number(el)))
    } else if(commandSegments[0] === "contains") {
      let index = newArr.findIndex(el => el === Number(commandSegments[1]))

      console.log(index)
    } else if(commandSegments[0] === "remove") {
      newArr.splice(commandSegments[1], 1)
    } else if(commandSegments[0] === "shift") {
      for(let i = 0; i < Number(commandSegments[1]); i++) {
        let first = newArr.shift()

        newArr = [...newArr, first]
      }
    } else if(commandSegments[0] === "sumPairs") {
      let summedArray = []

      for(let i = 0; i < newArr.length - 1; i += 2) {
        summedArray.push(Number(newArr[i]) + Number(newArr[i + 1]))
      }

      if(newArr.length % 2 !== 0) {
        summedArray.push(Number(newArr[newArr.length - 1]))
      }

      newArr = [...summedArray]
    } else if(commandSegments[0] === "print") {
      console.log(`[ ${newArr.join(", ")} ]`)
    }
  })
}

arrayManipulator([2, 2, 4, 2, 4], ["add 1 4", "sumPairs", "print"])
