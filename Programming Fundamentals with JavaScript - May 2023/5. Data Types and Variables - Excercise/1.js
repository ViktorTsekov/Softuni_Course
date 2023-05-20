function sumDigits(n) {
  const sum = n.toString().split("").map(el => Number(el)).reduce((accumulator, current) => {
    return accumulator + current
  }, 0)
  
  console.log(sum)
}

sumDigits(1234)
