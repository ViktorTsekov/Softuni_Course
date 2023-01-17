function projectsCreation(input) {
    return `The architect ${input[0]} will need ${Number(input[1]) * 3} hours to complete ${input[1]} project/s.`
}

console.log(projectsCreation(["Viktor", 3]))