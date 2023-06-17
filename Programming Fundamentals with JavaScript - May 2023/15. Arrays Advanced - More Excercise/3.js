function airPollution(matrix, commands) {
  let pollutedAreas = []

  commands.forEach(element => {
    let command = element.split(" ")

    if(command[0] === "breeze") {
      let row = matrix[Number(command[1])].split(" ").map(el => {
        if(Number(el) - 15 < 0) {
          return 0
        } else {
          return Number(el) - 15
        }
      }).join(" ")

      matrix[Number(command[1])] = row
    } else if(command[0] === "gale") {
      for(i = 0; i < matrix.length; i++) {
        let row = matrix[i].split(" ")

        if(row[Number(command[1])] - 20 < 0) {
          row[Number(command[1])] = 0
        } else {
          row[Number(command[1])] -= 20
        }

        matrix[i] = row.join(" ")
      } 
    } else if(command[0] === "smog") {
      for(let i = 0; i < matrix.length; i++) {
        let row = matrix[i].split(" ").map(el => Number(el)).map(el => el += Number(command[1])).join(" ")

        matrix[i] = row
      }
    }
  })

  for(let i = 0; i < matrix.length; i++) {
    let row = matrix[i].split(" ").map(el => Number(el))

    row.forEach((el, index) => {
      if(el >= 50) {
        pollutedAreas.push(`[${i}-${index}]`)
      }
    })
  }

  if(pollutedAreas.length === 0) {
    console.log("No polluted areas")
  } else {
    console.log(`Polluted areas: ${pollutedAreas.join(", ")}`)
  }
}

airPollution(['5 7 2 14 4', '21 14 2 5 3', '3 16 7 42 12', '2 20 8 39 14', '7 34 1 10 24'], ['breeze 1', 'gale 2', 'smog 35'])
