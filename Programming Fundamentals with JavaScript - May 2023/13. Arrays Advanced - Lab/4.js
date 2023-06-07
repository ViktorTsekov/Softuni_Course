function lastKNumbers(n, k) {
  let arr = [1]

  for(let i = 1; i < n; i++) {
    let startingPos = i - k < 0 ? 0 : i - k
    let newEl = arr.slice(startingPos, i + 1).reduce((previous, current) => {
      return previous + current
    }, 0)

    arr.push(newEl)
  }

  console.log(arr.join(" "))
}

lastKNumbers(8, 2)
