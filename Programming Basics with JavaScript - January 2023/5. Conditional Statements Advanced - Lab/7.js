function workingHours(input) {
  if(Number(input[0]) >= 10 && Number(input[0]) <= 18) {
    switch(input[1]) {
      case "Sunday": console.log("closed"); break;
      default: console.log("open"); break;
    }
  } else {
    console.log("closed")
  }
}

workingHours(["11", "Monday"])
