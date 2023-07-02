function binaryDigitsCount(num, bin) {
  let binary = num.toString(2)

  binary = binary.split("").filter(el => el === bin.toString())
  console.log(binary.length)
}

binaryDigitsCount(20, 0)
