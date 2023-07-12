function schoolGrades(input) {
  let grades = new Map()

  for(el of input) {
    let name = el.split(" ")[0]
    let gradesArr = el.split(" ").slice(1).join(" ")

    if(grades.has(name)) {
      grades.set(name, grades.get(name) + " " + gradesArr)
    } else {
      grades.set(name, gradesArr)
    }
  }

  let sortedKeys = [...grades.keys()].sort((a, b) => a.localeCompare(b))
  let sortedGrades = new Map()

  sortedKeys.forEach(key => sortedGrades.set(key, grades.get(key)))
  
  sortedGrades.forEach((value, key) => {
    let av = value.split(" ").map(el => Number(el)).reduce((prev, cur) => prev + cur, 0) / value.split(" ").length

    console.log(`${key}: ${av.toFixed(2)}`)
  })
}

schoolGrades(['Lilly 4 6 6 5', 'Tim 5 6', 'Tammy 2 4 3', 'Tim 6 6'])
