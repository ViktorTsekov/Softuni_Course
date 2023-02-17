function cake(input) {
  let cakeSize = Number(input[0]) * Number(input[1])
  let index = 2

  while(input[index] !== "STOP" && index !== input.length) {
    cakeSize -= input[index]
    index++
  }

  if(cakeSize < 0) {
    console.log(`No more cake left! You need ${Math.abs(cakeSize)} pieces more.`)
  } else {
    console.log(`${cakeSize} pieces are left.`)
  }
}

cake(["10", "2", "2", "4", "6", "STOP"])
