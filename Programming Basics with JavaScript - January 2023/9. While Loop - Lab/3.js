function sumNumbers(input) {
  let sum = 0
  let index = 1

  while(sum < Number(input[0]) || index !== input.length) {
    sum += Number(input[index])
    index++
  }

  console.log(sum)
}

sumNumbers(["100", "10", "20", "30", "40"])
