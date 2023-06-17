function equalNeighbours(matrix) {
  let equalPairs = 0
  let visitedCells = []

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      let cur = matrix[i][j]
      let leftNeighbour = undefined
      let rightNeighbour = undefined
      let topNeighbour = undefined
      let bottomNeighbour = undefined

      if(j - 1 >= 0 && !visitedCells.join(" ").includes("" + i + (j - 1))) {
        leftNeighbour = matrix[i][j - 1] 
      }

      if(j + 1 < matrix[0].length && !visitedCells.join(" ").includes("" + i + (j + 1))) {
        rightNeighbour = matrix[i][j + 1] 
      }

      if(i - 1 >= 0 && !visitedCells.join(" ").includes("" + (i - 1) + j)) {
        topNeighbour = matrix[i - 1][j]
      }

      if(i + 1 < matrix.length && !visitedCells.join(" ").includes("" + (i + 1) + j)) {
        bottomNeighbour = matrix[i + 1][j]
      }

      if(cur === leftNeighbour || cur === rightNeighbour || cur === topNeighbour || cur === bottomNeighbour) {
        equalPairs++
      }

      visitedCells.push("" + i + j)
    }
  }

  console.log(equalPairs)
}

equalNeighbours([['2', '3', '4', '7', '0'], 
                 ['4', '0', '5', '3', '4'], 
                 ['2', '3', '5', '4', '2'], 
                 ['9', '8', '7', '5', '4']])
