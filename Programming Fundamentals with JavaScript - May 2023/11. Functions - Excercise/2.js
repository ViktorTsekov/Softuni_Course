function addAndSubtract(a, b, c) {
  let sum = () => {
    return a + b
  }

  let subtract = () => {
    return sum() - c
  }

  console.log(subtract())
}

addAndSubtract(1, 17, 30)
