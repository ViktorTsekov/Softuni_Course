function summerOutfit(input) {
  let degrees = input[0]
  let outfit = ""
  let shoes = ""

  if(degrees >= 10 && degrees <= 18) {
    if(input[1] === "Afternoon" || input[1] === "Evening") {
      outfit = "Shirt"
      shoes = "Moccasins"
    } else {
      outfit = "Sweatshirt"
      shoes = "Sneakers"
    }
  } else if(degrees > 18 && degrees <= 24) {
    if(input[1] === "Morning" || input[1] === "Evening") {
      outfit = "Shirt"
      shoes = "Moccasins"
    } else {
      outfit = "T-Shirt"
      shoes = "Sandals"
    }
  } else {
    if(input[1] === "Morning") {
      outfit = "T-Shirt"
      shoes = "Sandals"
    } else if(input[1] === "Afternoon") {
      outfit = "Swim Suit"
      shoes = "Barefoot"
    } else {
      outfit = "Shirt"
      shoes = "Moccasins"
    }
  }

  console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}

summerOutfit(["22", "Afternoon"])
