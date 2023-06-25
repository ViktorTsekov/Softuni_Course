function sequence(input) {
  let result = []

  for(seq of input) {
    let str1 = JSON.stringify(JSON.parse(seq).sort((a, b) => {
      return a - b
    }))
    let isUnique = true

    result.forEach(el => {
      let str2 = JSON.stringify(el.sort((a, b) => {
        return a - b
      }))

      if(str1 === str2) {
        isUnique = false
      }
    })

    if(isUnique) {
      let newArr = JSON.parse(seq).sort((a, b) => {
        return a - b
      })

      result.push(newArr)
    }
  }

  result.sort((a, b) => {
    return a.length - b.length
  })

  result.forEach(el => console.log(`[${el.reverse().join(", ")}]`))
}

sequence(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]"])
