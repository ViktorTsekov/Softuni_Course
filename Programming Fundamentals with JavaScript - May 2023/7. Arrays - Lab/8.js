function condenseArrayToNumber(array) {
  let arr = array

  while(arr.length !== 1) {
    let newArr = []

    for(let i = 0; i < arr.length - 1; i++) {
      newArr.push(arr[i] + arr[i + 1])
    }

    arr = newArr
  }

  console.log(arr[0])
}

condenseArrayToNumber([2, 10, 3])
