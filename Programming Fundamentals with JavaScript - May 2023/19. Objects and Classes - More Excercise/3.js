function school(input) {
  let students = []

  for(student of input) {
    let name = student.split(", ")[0].split(": ")[1]
    let grade = Number(student.split(", ")[1].split(": ")[1])
    let averageResult = Number(student.split(", ")[2].split(": ")[1])

    if(averageResult >= 3) {
      students.push({
        name,
        grade, 
        averageResult
      })
    }
  }

  students.sort((a, b) => {
    return a.grade - b.grade
  })
  
  let distinctClasses = students.map(el => el.grade).filter((value, index, self) => {
    return self.indexOf(value) === index
  })

  distinctClasses.forEach(distinctClass => {
    let studentsFromThatGrade = students.filter(el => el.grade === distinctClass)
    let averageResult = studentsFromThatGrade.map(el => el.averageResult).reduce((prev, cur) => {
      return prev + cur
    }, 0) / studentsFromThatGrade.length

    console.log(`${distinctClass + 1} Grade`)
    console.log(`List of students: ${studentsFromThatGrade.map(el => el.name).join(", ")}`)
    console.log(`Average annual score from last year: ${averageResult.toFixed(2)}\n`)
  })
}

school(['Student name: George, Grade: 5, Graduated with an average score: 2.75', 'Student name: Alex, Grade: 9, Graduated with an average score: 3.66', 'Student name: Peter, Grade: 8, Graduated with an average score: 2.83', 'Student name: Boby, Grade: 5, Graduated with an average score: 4.20', 'Student name: John, Grade: 9, Graduated with an average score: 2.90', 'Student name: Steven, Grade: 2, Graduated with an average score: 4.90', 'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'])
