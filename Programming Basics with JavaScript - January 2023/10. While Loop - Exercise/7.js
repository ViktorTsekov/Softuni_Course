function moving(input) {
  let freeSpace = Number(input[0]) * Number(input[1]) * Number(input[2])
  let takenSpace = input.slice(3).filter(el => el !== "Done").reduce((partialSum, el) => partialSum + Number(el), 0)

  freeSpace -= takenSpace

  if(freeSpace < 0) {
    console.log(`No more free space! You need ${Math.abs(freeSpace)} Cubic meters more.`)
  } else {
    console.log(`${freeSpace} Cubic meters left.`)
  }
}

moving(["10", "1", "2", "4", "6", "Done"])
