function matrix(n) {
  for(let i = 0; i < n; i++) {
    let line = ""

    for(let j = 0; j < n; j++) {
      line += n + " "
    }

    console.log(line)
  }
}

matrix(3)
