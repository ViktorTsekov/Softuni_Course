function godzillaVsKong(input) {
    let decorPrice = Number(input[0]) * 0.1
    let clothesPrice = Number(input[1]) * Number(input[2])

    if(Number(input[1]) > 150) {
        clothesPrice *= 0.9
    }

    let totalPrice = decorPrice + clothesPrice

    if(totalPrice > Number(input[0])) {
        console.log("Not enough money!")
        console.log(`Wingard needs ${(totalPrice - Number(input[0])).toFixed(2)} leva more.`)
    } else {
        console.log("Action!")
        console.log(`Wingard starts filming with ${(Number(input[0]) - totalPrice).toFixed(2)} leva left.`)
    }
}

godzillaVsKong(["20000", "120", "55.5"])