function smallest(a, b, c) {
  let smallest = [a, b, c].sort((a, b) => {
    if(a === b) {
      return 0
    }

    return a > b ? 1 : -1
  })[0]

  console.log(smallest)
}

smallest(1, 2, 3)
