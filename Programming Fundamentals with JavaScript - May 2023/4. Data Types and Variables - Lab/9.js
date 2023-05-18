function specialNumber(num) {
  for(let i = 1; i <= num; i++) {
    const sum = i.toString().split("").map(el => Number(el)).reduce((accumulator, current) => accumulator + current, 0)
    const isSpecial = sum === 5 || sum === 7 || sum === 11

    console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`)
  }
}

specialNumber(15)
