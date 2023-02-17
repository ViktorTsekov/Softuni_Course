function steps(input) {
  let index = input.indexOf("Going home")
  let array = []

  if(index !== -1) {
    array = input.slice(0, input.indexOf("Going home")).concat(input.slice(input.indexOf("Going home") + 1, input.length)) 
  } else {
    array = input
  }
  
  let sum = array.reduce((partialSum, el) => partialSum + Number(el), 0)
 
  if(sum < 10000) {
    console.log(`${10000 - sum} more steps to reach goal.`)
  } else {
    console.log("Goal reached! Good job!")
    console.log(`${sum - 10000} steps over the goal!`)
  }
}

steps(["1000",
  "1500",
  "2000",
  "6500"])
