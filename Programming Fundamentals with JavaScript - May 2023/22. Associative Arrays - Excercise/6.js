function companyUsers(input) {
  let companies = {}

  for(el of input) {
    let companyName = el.split(' -> ')[0]
    let id = el.split(' -> ')[1]

    if(companies[companyName] === undefined) {
      companies[companyName] = new Set()
      companies[companyName].add(id)
    } else {
      companies[companyName].add(id)
    }
  }

  let sortedCompanies = {}
  
  Object.keys(companies).sort((a, b) => a.localeCompare(b)).forEach((key) => sortedCompanies[key] = companies[key])

  for(key in sortedCompanies) {
    console.log(key)
    console.log("--", [...companies[key].values()].join("\n-- "))
  }
}

companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345'])
