function password(input) {
  const name = input[0]
  const password = name.split("").reverse().join("")
  let numTries = 0

  input.slice(1).every(element => {
    if(element === password) {
      console.log(`User ${name} logged in.`)
    } else {
      if(numTries < 3) {
        console.log("Incorrect password. Try again.")
      }
      
      numTries++
    }

    if(numTries >= 4) {
      console.log(`User ${name} blocked!`)
      return false
    } else {
      return true
    }
  })
}

password(['Acer','login','go','let me in','recA'])
