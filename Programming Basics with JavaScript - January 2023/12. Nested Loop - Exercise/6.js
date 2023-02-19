function cinemaTickets(input) {
  let cur = ""
  let index = 0

  let movieName = ""
  let freeSpaces = 0
  let takenSpaces = 0

  let standardTicketsSold = 0
  let studentTicketsSold = 0
  let kidTicketsSold = 0

  while(cur !== "Finish") {
    cur = input[index]

    if(isNaN(Number(cur)) && cur !== "standard" && cur !== "student" && cur !== "kid" && cur !== "End" && cur !== "Finish") {
      movieName = cur
    } else if(!isNaN(Number(cur))) {
      freeSpaces = Number(cur)
    } else {
      if(cur !== "End" && cur !== "Finish") {
        takenSpaces++

        switch(cur) {
          case "standard": standardTicketsSold++; break;
          case "student": studentTicketsSold++; break;
          case "kid": kidTicketsSold++; break;
        }
      }
    }

    if(cur === "End" || cur === "Finish" || takenSpaces >= freeSpaces) {
      if(freeSpaces !== 0) {
        if(movieName.length !== 0) {
          if(takenSpaces >= freeSpaces) {
            console.log(`${movieName} - 100.00% full.`)
          } else {
            console.log(`${movieName} - ${(takenSpaces / freeSpaces * 100).toFixed(2)}% full.`)
          }
        }

        movieName = ""
        takenSpaces = 0
        freeSpaces = 0
      }
    }

    index++
  }

  let totalTicketsSold = standardTicketsSold + studentTicketsSold + kidTicketsSold

  console.log(`Total tickets: ${totalTicketsSold}`)
  console.log(`${(studentTicketsSold / totalTicketsSold * 100).toFixed(2)}% student tickets.`)
  console.log(`${(standardTicketsSold / totalTicketsSold * 100).toFixed(2)}% standard tickets.`)
  console.log(`${(kidTicketsSold / totalTicketsSold * 100).toFixed(2)}% kids tickets.`)
}

cinemaTickets(["The Matrix", "20", "student", "standard", "kid", "kid", "student", "student", "standard", "student", "End", "The Green Mile", "17", "student", "standard", "standard", "student", "standard", "student", "End", "Amadeus", "3", "standard", "standard", "standard", "Finish"])
