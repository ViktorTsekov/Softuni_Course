function matchFullName(input) {
  const re = /^[A-Z][a-z]+\s[A-Z][a-z]+$/
  const result = []

  input.split(', ').forEach(name => {
    if(re.exec(name) !== null) {
      result.push(name)
    }
  })

  console.log(result.join(" "))
}

matchFullName("Ivan Ivanov, Ivan ivAnov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan   Ivanov")
