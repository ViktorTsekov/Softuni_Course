function hotelRoom(input) {
  let periodOfStay = Number(input[1])
  let studioDiscount = 0
  let apartmentDiscount = 0
  let studioPrice = 0
  let apartmentPrice = 0
  
  switch(input[0]) {
    case "May":
    case "October": 
      studioPrice = 50
      apartmentPrice = 65
      
      if(periodOfStay > 14) {
        studioDiscount = 0.3
      } else if(periodOfStay > 7) {
        studioDiscount = 0.05
      }

      break
    case "June":
    case "September":
      studioPrice = 75.2
      apartmentPrice = 68.7

      if(periodOfStay > 14) {
        studioDiscount = 0.2
      }
      
      break
    case "July":
    case "August": studioPrice = 76; apartmentPrice = 77; break;
  }

  if(periodOfStay > 14) {
    apartmentDiscount = 0.1
  }

  console.log(`Apartment: ${(periodOfStay * apartmentPrice * (1 - apartmentDiscount)).toFixed(2)} lv.`)
  console.log(`Studio: ${(periodOfStay * studioPrice * (1 - studioDiscount)).toFixed(2)} lv.`)
}

hotelRoom(["May", "15"])
