function reverseInPlace(array) {
  let result = ""

  for(let i = 0; i < array.length / 2; i++) {
    const temp = array[i]
    array[i] = array[array.length - i - 1]
    array[array.length - i - 1] = temp
  }

  array.forEach(element => {
    result += element + " "
  })

  console.log(result)
}

reverseInPlace(['a', 'b', 'c', 'd', 'e'])
