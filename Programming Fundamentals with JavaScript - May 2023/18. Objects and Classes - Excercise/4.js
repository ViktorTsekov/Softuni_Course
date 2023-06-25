function movies(input) {
  let movies = []

  for(command of input) {
    if(command.includes("addMovie")) {
      let movieName = command.split("addMovie ")[1]
   
      movies.push({name: movieName})
    } else if(command.includes("directedBy")) {
      let movieName = command.split(" directedBy ")[0]
      let directorName = command.split(" directedBy ")[1]
      let movieIndex = movies.findIndex(e => e.name === movieName)

      if(movieIndex !== -1) {
        let newObj = movies[movieIndex]

        newObj["director"] = directorName
        movies[movieIndex] = newObj
      }
    } else if(command.includes("onDate")) {
      let movieName = command.split(" onDate ")[0]
      let date = command.split(" onDate ")[1]
      let movieIndex = movies.findIndex(e => e.name === movieName)

      if(movieIndex !== -1) {
        let newObj = movies[movieIndex]

        newObj["date"] = date
        movies[movieIndex] = newObj
      }
    }
  }

  movies.forEach(e => {
    if(e["name"] !== undefined && e["director"] !== undefined && e["date"] !== undefined) {
      console.log(JSON.stringify(e))
    }
  })
}

movies(['addMovie Fast and Furious', 'addMovie Godfather', 'Inception directedBy Christopher Nolan', 'Godfather directedBy Francis Ford Coppola', 'Godfather onDate 29.07.2018', 'Fast and Furious onDate 30.07.2018', 'Batman onDate 01.08.2018', 'Fast and Furious directedBy Rob Cohen'] )
