function equalArrays(arr1, arr2) {
  let indexOfDifference = -1

  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      indexOfDifference = i
      break
    }
  }

  if(indexOfDifference !== -1) {
    console.log(`Arrays are not identical. Found difference at ${indexOfDifference} index`)
  } else {
    const sum = arr1.map(el => Number(el)).reduce((previous, current) => {
      return previous + current
    }, 0)

    console.log(`Arrays are identical. Sum: ${sum}`)
  }
}

equalArrays(['10','20','30'], ['10','20','30'])
