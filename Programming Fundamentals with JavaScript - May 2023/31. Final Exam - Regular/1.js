function passwordValidator(input) {
  let password = input.shift()

  for(command of input) {
    if(command.includes('Make Upper')) {
      let index = Number(command.split(' ')[2])
      let newChar = password[index].toUpperCase()
      let newPassword = password.split('')

      newPassword[index] = newChar
      password = newPassword.join('')

      console.log(password)
    } else if(command.includes('Make Lower')) {
      let index = Number(command.split(' ')[2])
      let newChar = password[index].toLowerCase()
      let newPassword = password.split('')

      newPassword[index] = newChar
      password = newPassword.join('')

      console.log(password)
    } else if(command.includes('Insert')) {
      let index = Number(command.split(' ')[1])
      let char = command.split(' ')[2]
      let newPassword = password.split('')

      newPassword.splice(index, 0, char)
      password = newPassword.join('')

      console.log(password)
    } else if(command.includes('Replace')) {
      let char = command.split(' ')[1]
      let value = Number(command.split(' ')[2])
      let asciiValue = char.charCodeAt(0) + value
      let newChar = String.fromCharCode(asciiValue)

      if(password.includes(char)) {
        let newPassword = password.split('')

        password.split('').forEach((el, index) => {
          if(el === char) {
            newPassword[index] = newChar
          }
        })

        password = newPassword.join('')

        console.log(password)
      }
    } else if(command.includes('Validation')) {
      if(password.length < 8) {
        console.log("Password must be at least 8 characters long!")
      }

      if(/^[\w]+$/.test(password) === false) {
        console.log("Password must consist only of letters, digits and _!")
      }

      if(/(?=[A-Z]+)/.test(password) === false) {
        console.log("Password must consist at least one uppercase letter!")
      }

      if(/(?=[a-z]+)/.test(password) === false) {
        console.log("Password must consist at least one lowercase letter!")
      }

      if(/(?=[0-9]+)/.test(password) === false) {
        console.log("Password must consist at least one digit!")
      }
    }
  }
}

passwordValidator(['123456789', 'Insert 3 R', 'Replace 5 15', 'Validation', 'Make Lower 3', 'Complete'])
