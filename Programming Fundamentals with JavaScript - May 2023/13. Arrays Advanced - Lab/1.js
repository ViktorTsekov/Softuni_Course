function sumFirstAndLast(arr) {
  const sum = Number(arr.shift()) + Number(arr.pop())

  console.log(sum)
}

sumFirstAndLast(['20', '30', '40'])
