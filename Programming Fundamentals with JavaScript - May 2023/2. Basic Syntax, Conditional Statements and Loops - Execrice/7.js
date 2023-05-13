function triangle(n) {
  let currentTriangleSize = 1

  for(let i = 1; i <= n; i++) {
    let line = ""

    for(let j = 0; j < currentTriangleSize; j++) {
      line += i + " "
    }

    currentTriangleSize++
    console.log(line)
  }
}

triangle(3)
