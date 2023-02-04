function maxNumber(input) {
  let arr = input.filter(el => el !== "Stop")
    .map(el => Number(el))
    .sort((a, b) => {
      return a === b ? 0 : (a > b ? -1 : 1)
    })

  console.log(arr[0])
}

maxNumber(["-10", "20", "-30", "Stop"])
