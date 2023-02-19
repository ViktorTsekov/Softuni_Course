function specialNumbers(input) {
  let n = Number(input[0])
  let output = ""

  for(let i = 1111; i <= 9999; i++) {
    let isSpecial = true

    i.toString().split("").forEach(el => {
      if(n % Number(el) !== 0){
        isSpecial = false
      }
    })

    if(isSpecial) {
      output += `${i} `
    }
  }

  console.log(output.slice(0, output.length - 1))
}

specialNumbers(["11"])
