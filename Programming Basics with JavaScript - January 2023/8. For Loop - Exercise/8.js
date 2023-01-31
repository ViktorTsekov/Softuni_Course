function tennisRanklist(input) {
  let n = Number(input[0])
  let points = Number(input[1])
  let w = 0
  let f = 0
  let sf = 0

  input.slice(2, input.length).forEach(element => {
    if(element === "W") w++
    if(element === "F") f++
    if(element === "SF") sf++
  })

  points += (w * 2000)
  points += (f * 1200)
  points += (sf * 720)

  console.log("Final points:", points)
  console.log("Average points:", Math.floor((points - Number(input[1])) / n))
  console.log(`${(w / n * 100).toFixed(2)}%`)
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"])
