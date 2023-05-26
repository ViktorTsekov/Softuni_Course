function maxSequence(arr) {
  let longestSequence = []

  for(let i = 0; i < arr.length; i++) {
    const cur = arr[i]
    const currentSequence = []

    for(let j = i; j < arr.length; j++) {
      if(arr[j] === cur) {
        currentSequence.push(arr[j])
      } else {
        break
      }
    }

    if(longestSequence.length < currentSequence.length) {
      longestSequence = [...currentSequence]
    }
  }

  console.log(...longestSequence)
}

maxSequence([1, 1, 1, 2, 3, 1, 3, 3])
