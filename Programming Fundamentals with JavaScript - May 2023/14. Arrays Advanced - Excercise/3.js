function houseParty(input) {
  let guestList = {}

  input.forEach(command => {
    let name = command.split(" ")[0]

    if(command.includes("not")) {
      if(guestList[name] !== undefined) {
        delete guestList[name]
      } else {
        console.log(`${name} is not in the list!`)
      }
    } else {
      if(guestList[name] === undefined) {
        guestList[name] = name
      } else {
        console.log(`${name} is already in the list!`)
      }
    }
  })

  let keys = Object.keys(guestList)

  keys.forEach(key => console.log(guestList[key]))
}

houseParty(['Tom is going!', 'Annie is going!', 'Tom is going!', 'Garry is going!', 'Jerry is going!'])
