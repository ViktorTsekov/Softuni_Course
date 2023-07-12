function piccolo(input) {
  let set = new Set()

  for(el of input) {
    let operation = el.split(", ")[0]
    let carNumber = el.split(", ")[1]

    if(operation === "IN") {
      set.add(carNumber)
    } else {
      set.delete(carNumber)
    }
  }

  set = [...set.values()].sort((a, b) => a.localeCompare(b)).reduce((prev, cur) => {
    return prev.add(cur)
  }, new Set)

  set.forEach(el => console.log(el))
}

piccolo(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'IN, CA9999TT', 'IN, CA2866HI', 'OUT, CA1234TA', 'IN, CA2844AA', 'OUT, CA2866HI', 'IN, CA9876HH', 'IN, CA2822UU'])
