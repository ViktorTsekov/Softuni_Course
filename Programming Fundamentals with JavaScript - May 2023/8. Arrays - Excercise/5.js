function maxNumber(arr) {
  const result = []

  for(let i = 0; i < arr.length; i++) {
    const cur = arr[i]
    const filteredArray = arr.slice(i + 1).filter(item => cur <= item)

    if(filteredArray.length === 0) {
      result.push(cur)
    }
  }

  console.log(...result)
}

maxNumber([41, 41, 34, 20])
