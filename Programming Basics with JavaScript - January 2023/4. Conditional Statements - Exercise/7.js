function shopping(input) {
    let budget = Number(input[0])
    let videocards = Number(input[1])
    let processors = Number(input[2])
    let ram = Number(input[3])

    let videocardsPrice = videocards * 250
    let processorsPrice = processors * (videocardsPrice * 0.35)
    let ramPrice = ram * (videocardsPrice * 0.1)

    let totalPrice = videocardsPrice + processorsPrice + ramPrice

    if(videocards > processors) {
        totalPrice *= 0.85
    }

    if(budget < totalPrice) {
        console.log(`Not enough money! You need ${(totalPrice - budget).toFixed(2)} leva more!`)
    } else {
        console.log(`You have ${(budget - totalPrice).toFixed(2)} leva left!`)
    }
}

shopping(["900", "2", "1", "3"])