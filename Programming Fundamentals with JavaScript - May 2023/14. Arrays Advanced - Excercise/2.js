function distinctArray(arr) {
  let newArr = []
  let arrNumbers = {}

  arr.forEach(element => {
    if(arrNumbers[element] === undefined) {
      arrNumbers[element] = ""
      newArr.push(element)
    }
  })  

  console.log(...newArr)
}

distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
