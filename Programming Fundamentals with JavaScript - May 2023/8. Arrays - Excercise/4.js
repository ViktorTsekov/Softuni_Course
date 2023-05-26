function arrayRotation(arr, rotations) {
  let newArr = [...arr]

  for(let i = 0; i < rotations; i++) {
    const firstElement = newArr.shift()

    newArr = [...newArr, firstElement]
  }

  console.log(...newArr)
}

arrayRotation([51, 47, 32, 61, 21], 2)
