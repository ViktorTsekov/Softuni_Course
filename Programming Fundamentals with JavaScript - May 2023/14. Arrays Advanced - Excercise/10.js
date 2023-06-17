function buildWall(input) {
  let concreteUsed = 0
  let idsOfCrewsRelieved = []
  let output = []

  while(idsOfCrewsRelieved.length !== input.length) {
    let total = 0

    for(let i = 0; i < input.length; i++) {
      if(input[i] < 30) {
        total += 195
      } else {
        if(!idsOfCrewsRelieved.join(" ").includes(i)) {
          idsOfCrewsRelieved.push(i)
        }
      }

      input[i] = input[i] + 1
    }

    concreteUsed += total
    output.push(total)
  }

  console.log(output.slice(0, output.length - 1).join(", "))
  console.log(`${concreteUsed * 1900} pesos`)
}

buildWall([21, 25, 28])
