function password(input) {
  let password = input[1]

  input.slice(2).forEach(element => {
    if(element === password) {
      console.log(`Welcome ${input[0]}!`)
      return
    }
  })
}

password(["Nakov", "1234", "Pass", "1324", "1234"])
