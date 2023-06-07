function positiveAndNegative(arr) {
  let newArr = new Array()

  arr.forEach(element => {
    if(element >= 0) {
      newArr.push(element)
    } else {
      newArr = [element, ...newArr]
    } 
  })

  newArr.forEach(el => console.log(el))
}

positiveAndNegative(['7', '-2', '8', '9'])
