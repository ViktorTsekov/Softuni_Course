function train(input) {
  let wagons = input[0].split(" ").map(el => Number(el))
  let maxCapacity = Number(input[1])
  let commands = input.slice(2)

  commands.forEach(element => {
    let command = element.split(" ")
    let currentWagon = 0

    if(command[0] === "Add") {
      wagons.push(Number(command[1]))
    } else {
      while(wagons[currentWagon] + Number(command[0]) > maxCapacity) {
        currentWagon++
      }

      wagons[currentWagon] = wagons[currentWagon] + Number(command[0])
    }
  })

  console.log(...wagons)
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75'])
