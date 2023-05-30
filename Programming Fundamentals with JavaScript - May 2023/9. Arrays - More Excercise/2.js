function addAndRemove(input) {
  let arr = new Array()
  let cur = 1

  input.forEach(command => {
    if(command === "add") {
      arr.push(cur)
    }

    if(command === "remove" && arr.length !== 0) {
      arr.pop()
    } 

    cur++
  })

  if(arr.length === 0) {
    console.log("Empty")
  } else {
    console.log(...arr)
  }
}

addAndRemove(['add', 'add', 'remove', 'add', 'add'])
