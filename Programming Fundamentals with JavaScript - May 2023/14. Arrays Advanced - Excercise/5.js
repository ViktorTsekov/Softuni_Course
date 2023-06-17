function sortAnArray(arr) {
  arr.sort((a, b) => {
    if(a.length === b.length) {
      return a.localeCompare(b)
    }

    return a.length > b.length ? 1 : -1
  })
  
  console.log(arr.join("\n"))
}

sortAnArray(['alpha', 'beta', 'gamma'])
