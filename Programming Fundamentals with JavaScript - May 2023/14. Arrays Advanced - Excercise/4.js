function sorting(arr) {
  let newArr = []

  arr.sort((a, b) => {
    if(a === b) {
      return 0
    }

    return a > b ? -1 : 1
  })

  for(let i = 0; i < arr.length / 2; i++) {
    let first = arr[i]
    let last = arr[arr.length - i - 1]

    newArr.push(first)
    newArr.push(last)
  }

  if(arr.length % 2 !== 0) {
    newArr.pop()
  }

  console.log(...newArr)
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18])
