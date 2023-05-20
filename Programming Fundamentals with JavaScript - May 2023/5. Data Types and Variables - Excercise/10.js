function spiceMustFlow(yield) {
  const workersCost = 26

  let currentYield = yield
  let daysOperated = 0
  let spiceExtracted = 0

  while(currentYield >= 100) {
    spiceExtracted += currentYield - workersCost
    daysOperated++
    currentYield -= 10
  }

  if(spiceExtracted >= workersCost) {
    spiceExtracted -= workersCost
  }

  console.log(daysOperated)
  console.log(spiceExtracted)
}

spiceMustFlow(450)
