function pyramid(base, increment) {
  let currentBase = base
  let stoneRequired = 0
  let marbleRequired = 0
  let lapisRequired = 0
  let goldRequired = 0
  let height = 1

  while(true) {
    if(currentBase === 1 || currentBase === 2) {
      goldRequired += currentBase * currentBase * increment
      break
    } else if(height % 5 === 0) {
      let tempBase = currentBase - 2

      stoneRequired += tempBase * tempBase * increment
      lapisRequired += ((currentBase * currentBase) - (tempBase * tempBase)) * increment
    } else {
      let tempBase = currentBase - 2

      stoneRequired += tempBase * tempBase * increment
      marbleRequired += ((currentBase * currentBase) - (tempBase * tempBase)) * increment
    }

    currentBase -= 2
    height++
  }

  console.log(`Stone required: ${Math.ceil(stoneRequired)}`)
  console.log(`Marble required: ${Math.ceil(marbleRequired)}`)
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisRequired)}`)
  console.log(`Gold required: ${Math.ceil(goldRequired)}`)
  console.log(`Final pyramid height: ${Math.floor(height * increment)}`)
}

pyramid(12, 1)
