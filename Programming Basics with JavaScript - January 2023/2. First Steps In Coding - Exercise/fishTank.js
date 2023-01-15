function fishTank(input) {
  let length = Number(input[0])
  let width = Number(input[1])
  let height = Number(input[2])
  let percent = Number(input[3]) / 100

  let totalVolume = length * width * height
  // We divide by 1000 to convert to liters
  let freeVolume = (totalVolume - (totalVolume * percent)) / 1000

  return freeVolume
}

console.log(fishTank(["85", "75", "47", "17"]))
