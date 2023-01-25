function skiTrip(input) {
  let periodOfStay = Number(input[0])
  let roomPrice = 0
  let totalPrice = 0
  let discount = 0

  switch(input[1]) {
    case "room for one person": roomPrice = 18; break;
    case "apartment":
      roomPrice = 25

      if(periodOfStay < 10) {
        discount = 0.3
      } else if(periodOfStay >= 11 && periodOfStay <= 15) {
        discount = 0.35
      } else {
        discount = 0.5
      }

      break
    case "president apartment":
      roomPrice = 35

      if(periodOfStay < 10) {
        discount = 0.1
      } else if(periodOfStay >= 11 && periodOfStay <= 15) {
        discount = 0.15
      } else {
        discount = 0.20
      }

      break
  }

  totalPrice = (periodOfStay - 1) * roomPrice * (1 - discount)

  if(input[2] === "positive") {
    totalPrice *= 1.25
  } else {
    totalPrice *= 0.9
  }

  console.log(totalPrice.toFixed(2))
}

skiTrip(["14", "apartment", "positive"])
