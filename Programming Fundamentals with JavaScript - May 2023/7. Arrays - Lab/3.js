function reverseArray(n, array) {
  let result = ""
  
  array.slice(0, n).reverse().forEach(element => {
    result += element + " "
  })

  console.log(result)
}

reverseArray(3, [10, 20, 30, 40, 50])
