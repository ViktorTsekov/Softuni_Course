function lunchBreak(input) {
    let title = input[0]
    let episodeLength = Number(input[1])
    let breakLength = Number(input[2])

    let lunchTime = breakLength * 0.125
    let restTime = breakLength * 0.25
    let timeLeft = breakLength - (lunchTime + restTime)

    if(episodeLength > timeLeft) {
        console.log(`You don't have enough time to watch ${title}, you need ${Math.ceil((episodeLength - timeLeft))} more minutes.`)
    } else {
        console.log(`You have enough time to watch ${title} and left with ${Math.ceil((timeLeft - episodeLength))} minutes free time.`)
    }
}

lunchBreak(["Game of Thrones", "48", "60"])