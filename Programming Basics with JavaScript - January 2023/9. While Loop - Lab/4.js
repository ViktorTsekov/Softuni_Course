function sequence(input) {
  let n = 1

  while(n <= Number(input[0])) {
    console.log(n)
    n = n * 2 + 1
  }
}

sequence(["31"])
