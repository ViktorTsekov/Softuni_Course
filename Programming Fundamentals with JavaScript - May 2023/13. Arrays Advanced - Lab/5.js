function processOddNumbers(arr) {
  let newArr = []

  for(let i = 1; i < arr.length; i += 2) {
    newArr.push(arr[i] * 2)
  }

  console.log(newArr.reverse().join(" "))
}

processOddNumbers([10, 15, 20, 25])
