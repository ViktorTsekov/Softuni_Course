function toyshop(input) {
  let holidayPrice = input[0]
  let puzzleCount = input[1]
  let dollCount = input[2]
  let bearsCount = input[3]
  let minionsCount = input[4]
  let trucksCount = input[5]

  let totalPrice = puzzleCount * 2.60 + dollCount * 3 + bearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2
  let totalCount = 0

  input.slice(1).forEach(element => {
    totalCount += Number(element)
  })

  if(totalCount >= 50) {
    totalPrice = totalPrice * 0.75
  }

  totalPrice = totalPrice * 0.9

  if(holidayPrice > totalPrice) {
    console.log(`Not enough money! ${(holidayPrice - totalPrice).toFixed(2)} lv needed.`)
  } else {
    console.log(`Yes! ${(totalPrice - holidayPrice).toFixed(2)} lv left.`)
  }
}

toyshop(["240", "10", "12", "32", "20", "19"])
