function histogram(input) {
  let n = Number(input[0])

  let p1 = 0
  let p2 = 0
  let p3 = 0
  let p4 = 0
  let p5 = 0

  input.slice(1, n + 1).forEach(el => {
    let number = Number(el)
  
    if(number < 200) {
      p1++
    } else if(number <= 399) {
      p2++
    } else if(number <= 599) {
      p3++
    } else if(number <= 799) {
      p4++
    } else {
      p5++
    }
  })

  console.log((p1 / n * 100).toFixed(2) + "%")
  console.log((p2 / n * 100).toFixed(2) + "%")
  console.log((p3 / n * 100).toFixed(2) + "%")
  console.log((p4 / n * 100).toFixed(2) + "%")
  console.log((p5 / n * 100).toFixed(2) + "%")
}

histogram(["7", "800", "801", "250", "199", "399", "599", "799"])
