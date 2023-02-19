function building(input) {
  let r = Number(input[0])
  let c = Number(input[1])
  let curRow = ""

  for(let i = r; i >= 1; i--) {
    for(let j = 0; j < c; j++) {
      if(i === r) {
        curRow += `L${"" + i + j} `
      } else if(i % 2 !== 0) {
        curRow += `A${"" + i + j} `
      } else {
        curRow += `O${"" + i + j} `
      }
    }
    console.log(curRow.slice(0, curRow.length - 1))
    curRow = ""
  }
}

building(["6", "4"])
