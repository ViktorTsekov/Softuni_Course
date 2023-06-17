function gladiatorInventory(input) {
  let equipment = input[0].split(" ")
  let commands = input.slice(1)

  commands.forEach(command => {
    let commandSegments = command.split(" ")

    if(commandSegments[0] === "Buy") {
      let index = equipment.findIndex(el => el === commandSegments[1])

      if(index === -1) {
        equipment.push(commandSegments[1])
      }
    } else if(commandSegments[0] === "Trash") {
      let index = equipment.findIndex(el => el === commandSegments[1])

      if(index !== -1) {
        equipment.splice(index, 1)
      }
    } else if(commandSegments[0] === "Repair") {
      let index = equipment.findIndex(el => el === commandSegments[1])

      if(index !== -1) {
        equipment.splice(index, 1)
        equipment.push(commandSegments[1])
      }
    } else if(commandSegments[0] === "Upgrade") {
      let index = equipment.findIndex(el => el === commandSegments[1].split("-")[0])

      if(index !== -1) {
        equipment.splice(index + 1, 0, commandSegments[1].replace("-", ":"))
      }
    }
  })

  console.log(equipment.join(" "))
}

gladiatorInventory(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel'])
