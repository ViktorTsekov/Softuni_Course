function greaterNumber(input) {
    if(Number(input[0]) > Number(input[1])) {
        console.log(input[0])
    } else {
        console.log(input[1])
    }
}

greaterNumber(["-5", "5"])