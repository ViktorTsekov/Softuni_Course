function cinemaTicket(input) {
  switch(input[0]) {
    case "Monday": 
    case "Tuesday": console.log("12"); break;
    case "Wednesday": 
    case "Thursday": console.log("14"); break;
    case "Friday": console.log("12"); break;
    case "Saturday": 
    case "Sunday": console.log("16"); break;
    default: console.log("Error"); break;
  }
}

cinemaTicket(["Monday"])
