function basketballEquipment(input) {
  let annualBasketballFee = Number(input[0])

  let sneakersPrice = annualBasketballFee * 0.6
  let outfitPrice = sneakersPrice * 0.8
  let ballPrice = outfitPrice * 0.25
  let accessoriesPrice = ballPrice * 0.2

  let totalFee = annualBasketballFee + sneakersPrice + outfitPrice + ballPrice + accessoriesPrice

  return totalFee
}

console.log(basketballEquipment(["112"]))
