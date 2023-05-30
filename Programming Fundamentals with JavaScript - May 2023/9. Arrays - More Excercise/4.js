function nonDecreasingSubset(arr) {
    let biggest = arr[0]
    let result = arr.filter(item => {
      if(item >= biggest) {
        biggest = item
        return item
      }
    })

    console.log(...result)
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
