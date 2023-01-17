function foodDelivery(input) {
    let totalSum = input[0] * 10.35 + input[1] * 12.4 + input[2] * 8.15

    return totalSum + totalSum * 0.2 + 2.5
}

console.log(foodDelivery(["2", "4", "3"]))