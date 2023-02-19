function footballKit(input) {
  let shirtPrice = Number(input[0])
  let awardPrice = Number(input[1])

  let shortsPrice = shirtPrice * 0.75
  let socksPrice = shortsPrice * 0.2
  let shoesPrice = (shirtPrice + shortsPrice) * 2
  let totalSum = (shirtPrice + shortsPrice + socksPrice + shoesPrice) * 0.85

  if(totalSum >= awardPrice) {
    console.log("Yes, he will earn the world-cup replica ball!")
    console.log(`His sum is ${totalSum.toFixed(2)} lv.`)
  } else {
    console.log("No, he will not earn the world-cup replica ball.")
    console.log(`He needs ${(awardPrice - totalSum).toFixed(2)} lv. more.`)
  }
}

footballKit(["25", "100"])
