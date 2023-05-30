function magicMatrices(matrix) {
  let j = 0
  let areMagical = true

  while(j !== matrix.length - 1) {
    let rowSum = 0
    let colSum = 0

    rowSum += matrix[j].reduce((previous, current) => {
      return previous + current
    }, 0)

    for(let i = 0; i < matrix.length; i++) {
      colSum += matrix[i][j]
    }

    if(rowSum !== colSum) {
      areMagical = false
    }

    j++
  }
  
  console.log(areMagical)
}

magicMatrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]])
