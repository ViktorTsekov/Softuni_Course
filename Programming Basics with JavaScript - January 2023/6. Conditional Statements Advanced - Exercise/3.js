function newHouse(input) {
  let flowerQuantity = Number(input[1])
  let priceIndex = 1
  let pricePerFlower = 0
  let totalPrice = 0

  switch(input[0]) {
    case "Roses": pricePerFlower = 5; if(flowerQuantity > 80) priceIndex = 0.9; break;
    case "Dahlias": pricePerFlower = 3.80; if(flowerQuantity > 90) priceIndex = 0.85; break;
    case "Tulips": pricePerFlower = 2.80; if(flowerQuantity > 80) priceIndex = 0.85; break;
    case "Narcissus": pricePerFlower = 3; if(flowerQuantity < 120) priceIndex = 1.15; break;
    case "Gladiolus": pricePerFlower = 2.50; if(flowerQuantity < 80) priceIndex = 1.20; break;
  }

  totalPrice = flowerQuantity * pricePerFlower * priceIndex

  if(Number(input[2]) < totalPrice) {
    console.log(`Not enough money, you need ${(totalPrice - Number(input[2])).toFixed(2)} leva more.`)
  } else {
    console.log(`Hey, you have a great garden with ${flowerQuantity} ${input[0]} and ${(Number(input[2]) - totalPrice).toFixed(2)} leva left.`)
  }
}

newHouse(["Gladiolus", "64", "160"])
