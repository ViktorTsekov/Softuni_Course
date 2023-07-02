function pthBit(num, position) {
  let binary = num.toString(2)

  console.log(binary.split("")[position])
}

pthBit(2145, 5)
