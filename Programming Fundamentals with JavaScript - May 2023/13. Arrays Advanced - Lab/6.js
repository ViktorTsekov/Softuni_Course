function smallest2Numbers(arr) {
  arr.sort((a, b) => {
    if(a === b) {
      return 0
    }

    return a < b ? -1 : 1
  })

  console.log(arr[0], arr[1])
}

smallest2Numbers([30, 15, 50, 5])
