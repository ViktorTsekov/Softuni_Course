function catFood(input) {
  let percentFats = Number(input[0]) / 100
  let percentProteins = Number(input[1]) / 100
  let percentCarbohydrates = Number(input[2]) / 100
  let totalCalories = Number(input[3])
  let percentWater = Number(input[4]) / 100

  let foodWeight = (percentFats * totalCalories / 9) + (percentProteins * totalCalories / 4) + (percentCarbohydrates * totalCalories / 4)
  let caloriesPerGram = totalCalories / foodWeight

  console.log(((1 - percentWater) * caloriesPerGram).toFixed(4))
}

catFood(["60", "25", "15", "2500", "60"])
