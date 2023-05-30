function rotateArray(input) {
  let arr = input.slice(0, input.length - 1)
  let rotations = Number(input[input.length - 1])

  for(let i = 0; i < rotations; i++) {
    let last = arr.pop()

    arr = [last, ...arr]
  }

  console.log(...arr)
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'] )
