function arrayManipulations(input) {
  let arr = input[0].split(" ").map(el => Number(el))
  let commands = input.slice(1)

  commands.forEach(el => {
    let command = el.split(" ")

    if(command[0] === "Add") {
      arr.push(Number(command[1]))
    } else if(command[0] === "Remove") {
      arr = arr.filter(el => el !== Number(command[1]))
    } else if(command[0] === "RemoveAt") {
      arr.splice(Number(command[1]), 1)
    } else if(command[0] === "Insert") {
      arr.splice(Number(command[2]), 0, Number(command[1]))
    }
  })

  console.log(arr.join(" "))
}

arrayManipulations(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])
