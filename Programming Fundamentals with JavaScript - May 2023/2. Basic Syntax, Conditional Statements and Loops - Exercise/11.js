function bitcoinMining(input) {
  const gramOfGoldPrice = 67.51
  const bitcoinPrice = 11949.16

  let currentProfit = 0
  let bitcoinPurchased = 0
  let dayOfFirstBitcoin = 0

  input.forEach((element, index) => {
    if((index + 1) % 3 === 0) {
      currentProfit += (element * 0.7) * gramOfGoldPrice
    } else {
      currentProfit += element * gramOfGoldPrice
    }

    if(currentProfit >= bitcoinPrice) {
      if(bitcoinPurchased === 0) {
        dayOfFirstBitcoin = index + 1
      }

      let bitcoinsBought = Math.floor(currentProfit / bitcoinPrice)

      currentProfit -= (bitcoinsBought * bitcoinPrice)
      bitcoinPurchased += bitcoinsBought
    }
  })

  console.log(`Bought bitcoins: ${bitcoinPurchased}`)

  if(dayOfFirstBitcoin !== 0) {
    console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`)
  }

  console.log(`Left money: ${currentProfit.toFixed(2)} lv.`)
}

bitcoinMining([3124.15, 504.212, 2511.124])
