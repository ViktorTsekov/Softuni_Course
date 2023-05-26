function magicSum(arr, n) {
  let pairs = ""

  for(let i = 0; i < arr.length - 1; i++) {
    const cur = arr[i]
    
    arr.slice(i + 1).forEach(element => {
      if(cur + element === n) {
        pairs += `${cur} ${element}\n`
      }
    })
  }

  console.log(pairs)
}

magicSum([14, 20, 60, 13, 7, 19, 8], 27)
