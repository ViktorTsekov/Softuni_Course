function schoolSupplies(input) {
    return (Number(input[0]) * 5.8 + Number(input[1]) * 7.2 + Number(input[2]) * 1.2) * (1 - input[3] / 100)
}

console.log(schoolSupplies(["2", "3", "4", "25"]))