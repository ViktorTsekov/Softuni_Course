function phoneShop(input) {
  let phones = input[0].split(", ")
  let commands = input.slice(1)

  let phoneExists = (phone) => {
    return phones.join(" ").includes(phone)
  }

  commands.forEach(element => {
    let command = element.split(" - ")

    if(command[0] === "Add") {
      if(!phoneExists(command[1])) {
        phones.push(command[1])
      }
    } else if(command[0] === "Remove") {
      if(phoneExists(command[1])) {
        let phonesStr = phones.join(" ").replace(command[1], "-")

        phones = phonesStr.split(" ").filter(el => el !== "-")
      }
    } else if(command[0] === "Bonus phone") {
      let oldPhone = command[1].split(":")[0]
      let bonusPhone = command[1].split(":")[1]

      if(phoneExists(oldPhone)) {
        let indexOfOldPhone = -1

        for(let i = 0; i < phones.length; i++) {
          if(phones[i] === oldPhone) {
            indexOfOldPhone = i
            break
          }
        }

        phones.splice(indexOfOldPhone + 1, 0, bonusPhone)
      }
    } else if(command[0] === "Last") {
      if(phoneExists(command[1])) {
        let phonesStr = phones.join(" ").replace(command[1], "-")

        phones = phonesStr.split(" ").filter(el => el !== "-")

        phones.push(command[1])
      }
    } else if(command[0] === "End") {
      console.log(phones.join(", "))
    }
  })
}

phoneShop(["SamsungA50, MotorolaG5, HuaweiP10", "Last - SamsungA50", "Add - MotorolaG5", "End"])
