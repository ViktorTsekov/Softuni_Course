function bombNumbers(arr, bombNumber) {
  for(let i = 0; i < arr.length; i++) {
    let cur = arr[i]

    if(cur === bombNumber[0]) {
      for(let j = i - bombNumber[1]; j <= i + bombNumber[1]; j++) {
        arr[j] = 0
      }
    }
  }

  let sum = arr.reduce((previous, current) => {
    return previous + current
  }, 0)

  console.log(sum)
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2])
