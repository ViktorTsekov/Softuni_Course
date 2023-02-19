function twoSum(input) {
  let n1 = Number(input[0])
  let n2 = Number(input[1])
  let x = Number(input[2])
  let combinationNumber = 0
  let flag = 0

  for(let i = n1; i <= n2; i++) {
    for(let j = n1; j <= n2; j++) {
      combinationNumber++
      if(i + j === x && flag === 0) {
        console.log(`Combination N:${combinationNumber} (${i} + ${j} = ${x})`)
        flag = 1
      }
    }
  }

  if(flag === 0) {
    console.log(`${combinationNumber} combinations - neither equals ${x}`)
  }
}

twoSum(["23", "24", "20"])
