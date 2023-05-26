function equalSum(arr) {
  let equalityIndex = -1

  for(let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((previous, current) => {
      return previous + current
    }, 0)

    const rightSum = arr.slice(i + 1, arr.length).reduce((previous, current) => {
      return previous + current
    }, 0)

    if(leftSum === rightSum) {
      equalityIndex = i
    }
  }

  if(equalityIndex === -1) {
    console.log("no")
  } else {
    console.log(equalityIndex)
  }
}

equalSum([1, 2])
