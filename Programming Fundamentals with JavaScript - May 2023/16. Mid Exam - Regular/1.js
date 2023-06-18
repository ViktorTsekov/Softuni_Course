function biscuitFactory(input) {
  let biscuitsProducedPerDay = Number(input[0]) * Number(input[1])
  let competingFactoryBiscuits = Number(input[2])
  let totalBiscuits = 0

  for(let i = 1; i <= 30; i++) {
    if(i % 3 === 0) {
      totalBiscuits += Math.floor(biscuitsProducedPerDay * 0.75)
    } else {
      totalBiscuits += biscuitsProducedPerDay
    }
  }

  console.log(`You have produced ${totalBiscuits} biscuits for the past month.`)

  if(totalBiscuits > competingFactoryBiscuits) {
    console.log(`You produce ${((totalBiscuits / competingFactoryBiscuits - 1) * 100).toFixed(2)} percent more biscuits.`)
  } else {
    console.log(`You produce ${(100 - (totalBiscuits / competingFactoryBiscuits * 100)).toFixed(2)} percent less biscuits.`)
  }
}

biscuitFactory(["78", "8", "16000"])
