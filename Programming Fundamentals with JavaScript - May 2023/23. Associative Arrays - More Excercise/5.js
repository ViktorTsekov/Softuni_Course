function softuni(input) {
  let courses = {}
  let students = {}

  for(el of input) {
    if(el.includes(':')) {
      let course = el.split(':')[0]
      let capacity = Number(el.split(':')[1])

      if(courses[course] === undefined) {
        courses[course] = {}
        courses[course]['capacity'] = capacity
        courses[course]['students'] = []
      } else {
        courses[course]['capacity'] += capacity
      }
    } else if(el.includes('joins')) {
      let student = el.split(" with email ")[0].split('[')[0]
      let credits = Number(el.split(" with email ")[0].split('[')[1].split(']')[0])
      let email = el.split(" with email ")[1].split(" joins ")[0]
      let course = el.split(" with email ")[1].split(" joins ")[1]

      students[student] = {credits, email}
      
      if(courses[course] !== undefined) {
        if(courses[course]['capacity'] > 0) {
          courses[course]['students'].push(student)
          courses[course]['capacity']--
        }
      }
    }
  }

  let sortedCourses = Object.entries(courses).sort((a, b) => {
    let aStudents = a[1]['students'].sort((a, b) => students[b]['credits'] - students[a]['credits'])
    let bStudents = b[1]['students'].sort((a, b) => students[b]['credits'] - students[a]['credits'])

    a[1]['students'] = aStudents
    b[1]['students'] = bStudents

    return b[1]['students'].length - a[1]['students'].length
  })
  .reduce((prev, cur) => {
    let newObj = {...prev}

    newObj[cur[0]] = cur[1]

    return newObj
  }, {})

  for(course in sortedCourses) {
    console.log(`${course}: ${sortedCourses[course]['capacity']} places left`)
    sortedCourses[course]['students'].forEach(student => {
      console.log(`--- ${students[student]['credits']}: ${student}, ${students[student]['email']}`)
    })
  }
}

softuni(['JavaBasics: 15', 'user1[26] with email user1@user.com joins JavaBasics', 'user2[36] with email user11@user.com joins JavaBasics', 'JavaBasics: 5', 'C#Advanced: 5', 'user1[26] with email user1@user.com joins C#Advanced', 'user2[36] with email user11@user.com joins C#Advanced', 'user3[6] with email user3@user.com joins C#Advanced', 'C#Advanced: 1', 'JSCore: 8', 'user23[62] with email user23@user.com joins JSCore'])
