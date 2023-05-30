function spiralMatrix(n, m) {
  let matrix = Array(n).fill(0).map(() => Array(m).fill(0))
  let directions = ["right", "down", "left", "up"]
  let directionIndex = 0
  let indexes = 1
  let rightBoundary = m - 1
  let downBoundary = n - 1
  let leftBoundary = 0
  let upBoundary = 0
  let i = 0
  let j = 0

  while(indexes <= n * m) {
    let direction = directions[directionIndex]

    matrix[i][j] = indexes
    indexes++

    if(direction === "right") {
      j++

      if(j === rightBoundary) {
        directionIndex++
        rightBoundary--
      }
    } else if(direction === "down") {
      i++

      if(i === downBoundary) {
        directionIndex++
        downBoundary--
      }
    } else if(direction === "left") {
      j--

      if(j === leftBoundary) {
        directionIndex++
        leftBoundary++
      }
    } else if(direction === "up") {
      i--

      if(i === upBoundary + 1) {
        directionIndex = 0
        upBoundary++
      }
    }
  }

  for(let i = 0; i < n; i++) {
    let line = ""

    for(let j = 0; j < m; j++) {
      line += matrix[i][j] + " "
    }

    console.log(line)
  }
}

spiralMatrix(5, 5)
