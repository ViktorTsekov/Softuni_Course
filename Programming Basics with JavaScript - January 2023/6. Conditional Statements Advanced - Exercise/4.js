function fishingBoat(input) {
  let budget = Number(input[0])
  let numberOfPeople = Number(input[2])
  let boatPrice = 0

  switch(input[1]) {
    case "Spring": boatPrice = 3000; break;
    case "Summer": 
    case "Autumn": boatPrice = 4200; break;
    case "Winter": boatPrice = 2600; break;
  }

  if(numberOfPeople <= 6) {
    boatPrice *= 0.9
  } else if(numberOfPeople >= 7 && numberOfPeople <= 11) {
    boatPrice *= 0.85
  } else if(numberOfPeople > 12) {
    boatPrice *= 0.75
  }

  if(numberOfPeople % 2 === 0 && input[1] !== "Autumn") {
    boatPrice *= 0.95
  }

  if(boatPrice > budget) {
    console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`)
  } else {
    console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`)
  }
}

fishingBoat(["3600", "Autumn", "6"])
