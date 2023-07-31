function messageTranslator(input) {
  let re = /!(?<command>[A-Z][a-z]{2,})!:\[(?<message>[A-Za-z]{8,})\]/
  
  input.shift()

  for(command of input) {
    if(re.test(command) === true) {
      let match = re.exec(command)
      let comm = match.groups.command
      let message = match.groups.message
      let output = `${comm}: `
      
      message.split('').forEach(el => output += el.charCodeAt(0) + ' ')

      console.log(output)
    } else {
      console.log("The message is invalid")
    }
  }
}

messageTranslator(["2", "!Send!:[IvanisHere]", "*Time@:[Itis5amAlready"])
