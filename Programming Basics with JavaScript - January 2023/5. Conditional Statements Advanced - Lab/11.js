function fruitShop(input) {
  const workdays = "Monday / Tuesday / Wednesday / Thursday / Friday"
  const weekend = "Saturday / Sunday"

  let price = 0

  if(workdays.includes(input[1])) {
    switch(input[0]) {
      case "banana": price = 2.50; break;
      case "apple": price = 1.20; break;
      case "orange": price = 0.85; break;
      case "grapefruit": price = 1.45; break;
      case "kiwi": price = 2.70; break;
      case "pineapple": price = 5.50; break;
      case "grapes": price = 3.85; break;
    }
  } else if(weekend.includes(input[1])) {
    switch(input[0]) {
      case "banana": price = 2.70; break;
      case "apple": price = 1.25; break;
      case "orange": price = 0.9; break;
      case "grapefruit": price = 1.60; break;
      case "kiwi": price = 3.00; break;
      case "pineapple": price = 5.60; break;
      case "grapes": price = 4.20; break;
    }
  }

  if(price === 0) {
    console.log("error")
  } else {
    console.log((Number(input[2]) * price).toFixed(2))
  }
}

fruitShop(["apple", "Tuesday", "2"])
