function sortNumbers(a, b, c) {
  const arr = [a, b, c]

  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] < arr[j + 1]) {
        var temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }

  for(var i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

sortNumbers(5, 3, 8)
