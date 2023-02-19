function courierExpress(input) {
  let packageWeight = Number(input[0])
  let serviceType = input[1]
  let distance = Number(input[2])

  let price = 0
  let totalPrice = 0

  if(packageWeight < 1) {
    price = distance * 3
  } else if(packageWeight >= 1 && packageWeight < 10) {
    price = distance * 5
  } else if(packageWeight >= 10 && packageWeight < 40) {
    price = distance * 10
  } else if(packageWeight >= 40 && packageWeight < 90) {
    price = distance * 15
  } else {
    price = distance * 20
  }

  if(serviceType === "standard") {
    totalPrice = price
  } else {
    let feePerKilometer = 0

    if(packageWeight < 1) {
      feePerKilometer = packageWeight * (0.8 * 3)
    } else if(packageWeight >= 1 && packageWeight < 10) {
      feePerKilometer = packageWeight * (0.4 * 5)
    } else if(packageWeight >= 10 && packageWeight < 40) {
      feePerKilometer = packageWeight * (0.05 * 10)
    } else if(packageWeight >= 40 && packageWeight < 90) {
      feePerKilometer = packageWeight * (0.02 * 15)
    } else {
      feePerKilometer = packageWeight * (0.01 * 20)
    }

    totalPrice = price + (distance * feePerKilometer)
  }

  console.log(`The delivery of your shipment with weight of ${packageWeight.toFixed(3)} kg. would cost ${(totalPrice / 100).toFixed(2)} lv.`)
}

courierExpress(["87", "express", "130"])
