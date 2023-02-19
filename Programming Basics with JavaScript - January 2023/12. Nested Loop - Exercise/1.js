function numberPyramid(input) {
  let n = Number(input[0])
  let rowLength = 1
  let curNumber = 1
  let curRow = ""

  while(true) {
    for(let i = 0; i < rowLength; i++) {
      curRow += `${curNumber} `
      curNumber++

      if(curNumber > n) {
        console.log(curRow.slice(0, curRow.length - 1))
        return
      }
    }

    console.log(curRow.slice(0, curRow.length - 1))
    rowLength++
    curRow = ""
  }
}

numberPyramid(["15"])
