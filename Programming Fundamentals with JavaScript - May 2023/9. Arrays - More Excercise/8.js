function diagonalAttack(matrix) {
  let mainDiagonalSum = 0
  let secondDiagonalSum = 0

  for(let i = 0; i < matrix.length; i++) {
    let column = matrix[i].split(" ")

    mainDiagonalSum += Number(column[i])
  }

  for(let i = 0; i < matrix.length; i++) {
    let column = matrix[i].split(" ")

    secondDiagonalSum += Number(column[matrix.length - 1 - i])
  }

  if(mainDiagonalSum === secondDiagonalSum) {
    for(let i = 0; i < matrix.length; i++) {
      let column = matrix[i].split(" ")

      for(let j = 0; j < column.length; j++) {
        if(i + j !== column.length - 1 && i !== j) {
          column[j] = mainDiagonalSum
        }
      }

      matrix[i] = column.join(" ")
    }

    for(let i = 0; i < matrix.length; i++) {
      console.log(matrix[i])
    }
  } else {
    for(let i = 0; i < matrix.length; i++) {
      console.log(matrix[i])
    }
  }
}

diagonalAttack(['5 3 12 3 1', '11 4 23 2 5', '101 12 3 21 10', '1 4 5 2 2', '5 22 33 11 1'])
