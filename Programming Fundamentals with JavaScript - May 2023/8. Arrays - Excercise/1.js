function addAndSubtract(arr) {
  let newArray = [...arr]

  newArray.forEach((element, index) => {
    if(element % 2 === 0) {
      newArray[index] = newArray[index] + index
    } else {
      newArray[index] = newArray[index] - index
    }
  })

  const oldSum = arr.reduce((previous, current) => {
    return previous + current
  }, 0)

  const newSum = newArray.reduce((previous, current) => {
    return previous + current
  }, 0)

  console.log(newArray)
  console.log(oldSum)
  console.log(newSum)
}

addAndSubtract([5, 15, 23, 56, 35])
