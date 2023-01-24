function personalTitles(input) {
  if(input[1] === "m") {
    if(Number(input[0]) >= 16) {
      console.log("Mr.")
    } else {
      console.log("Master")
    }
  } else {
    if(Number(input[0]) >= 16) {
      console.log("Ms.")
    } else {
      console.log("Miss")
    }
  }
}

personalTitles(["17", "m"])
