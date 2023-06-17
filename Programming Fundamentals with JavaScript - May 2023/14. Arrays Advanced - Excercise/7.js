function searchForANumber(arr, commands) {
  let newArr = arr.slice(0, commands[0])
  let repetitions = 0

  newArr.splice(0, commands[1])

  newArr.forEach(element => {
    if(element === commands[2]) {
      repetitions++
    }
  })

  console.log(`Number ${commands[2]} occurs ${repetitions} times.`)
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3])
