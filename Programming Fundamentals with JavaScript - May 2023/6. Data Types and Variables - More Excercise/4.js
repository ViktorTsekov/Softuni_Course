function biggest(a, b, c) {
  const arr = [a, b, c]

  console.log(arr.sort((a, b) => {
    if(a === b) {
      return 0
    }

    return a < b ? 1 : -1
  })[0])
}

biggest(-2, 7, 3)
