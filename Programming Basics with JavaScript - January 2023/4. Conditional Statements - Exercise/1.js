function sumSeconds(input) {
    let totalTime = Number(input[0]) + Number(input[1]) + Number(input[2])

    if(totalTime % 60 <= 9) {
        console.log(Math.floor(totalTime / 60) + ":0" + totalTime % 60)
    } else {
        console.log(Math.floor(totalTime / 60) + ":" + totalTime % 60)
    }
}

sumSeconds(["23", "23", "20"])