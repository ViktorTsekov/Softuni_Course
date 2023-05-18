function amazingNumbers(num) {
  const sum = num.toString().split("").map(el => Number(el)).reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)

  console.log(`${num} Amazing? ${sum.toString().includes("9") ? 'True' : 'False'}`)
}

amazingNumbers(1233)
