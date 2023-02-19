function equalSums(input) {
  let n1 = Number(input[0])
  let n2 = Number(input[1])
  let output = ""

  for(let i = n1; i <= n2; i++) {
    let oddSum = 0
    let evenSum = 0

    i.toString().split("").forEach((el, index) => {
      if((index + 1) % 2 !== 0) {
        oddSum += Number(el)
      } else {
        evenSum += Number(el)
      }
    })

    if(oddSum === evenSum) {
      output += `${i} `
    }
  }

  console.log(output.slice(0, output.length - 1))
}

equalSums(["100000", "100050"])
