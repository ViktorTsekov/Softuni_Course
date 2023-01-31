function cleverLily(input) {
  let n = Number(input[0])
  let nToys = 0
  let nMoney = 0
  let savedMoney = 0

  if(n % 2 === 0) {
    nToys = nMoney = Math.floor(n / 2)
  } else {
    nMoney = Math.floor(n / 2)
    nToys = Math.floor(n / 2) + 1
  }

  for(let i = 0; i <= nMoney; i++) {
    savedMoney += (i * 10)
  }

  savedMoney += (nToys * Number(input[2]))
  savedMoney -= nMoney

  if(Number(input[1]) > savedMoney) {
    console.log(`No! ${(input[1] - savedMoney).toFixed(2)}`)
  } else {
    console.log(`Yes! ${(savedMoney - input[1]).toFixed(2)}`)
  }
}

cleverLily(["21", "1570.98", "3"])
