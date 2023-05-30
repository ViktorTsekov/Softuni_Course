function orbit(n, m, x, y) {
  let matrix = Array(n).fill(0).map(() => Array(m).fill(0))
  let xStartingPoint = x
  let xEndPoint = x
  let yStartingPoint = y
  let yEndPoint = y
  let currentOrbitNumber = 1
  let filledCells = 0

  matrix[x][y] = currentOrbitNumber
  filledCells++

  while(filledCells < n * m) {
    currentOrbitNumber++
    xStartingPoint = xStartingPoint - 1 < 0 ? 0 : xStartingPoint - 1
    xEndPoint = xEndPoint + 1 >= n ? n - 1 : xEndPoint + 1
    yStartingPoint = yStartingPoint - 1 < 0 ? 0 : yStartingPoint - 1
    yEndPoint = yEndPoint + 1 >= m ? m - 1 : yEndPoint + 1

    for(let i = xStartingPoint; i <= xEndPoint; i++) {
      for(let j = yStartingPoint; j <= yEndPoint; j++) {
        if(matrix[i][j] === 0) {
          matrix[i][j] = currentOrbitNumber
          filledCells++
        }
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

orbit(5, 5, 2, 2)
