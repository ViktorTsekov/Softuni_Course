function englishName(n) {
  const digits = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six", 
    7: "seven",
    8: "eight",
    9: "nine"
  }

  const digit = n.toString().slice(n.toString().length - 1)

  console.log(digits[digit])
}

englishName(1234)
