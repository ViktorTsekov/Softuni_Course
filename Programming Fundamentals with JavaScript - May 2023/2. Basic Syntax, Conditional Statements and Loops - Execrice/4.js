function vacation(group, groupType, weekDay) {
  let pricePerPerson = 0
  let totalPrice = 0

  if(groupType === "Students") {
    if(weekDay === "Friday") {
      pricePerPerson = 8.45
    } else if(weekDay === "Saturday") {
      pricePerPerson = 9.80
    } else {
      pricePerPerson = 10.46
    }
  } else if(groupType === "Business") {
    if(weekDay === "Friday") {
      pricePerPerson = 10.90
    } else if(weekDay === "Saturday") {
      pricePerPerson = 15.60
    } else {
      pricePerPerson = 16
    }
  } else {
    if(weekDay === "Friday") {
      pricePerPerson = 15
    } else if(weekDay === "Saturday") {
      pricePerPerson = 20
    } else {
      pricePerPerson = 22.50
    }
  }

  totalPrice = group * pricePerPerson
  
  if(groupType === "Students" && group >= 30) {
    totalPrice *= 0.85
  } else if(groupType === "Business" && group >= 100) {
    totalPrice = (group - 10) * pricePerPerson
  } else if(groupType === "Regular" && group >= 10 && group <= 20) {
    totalPrice *= 0.95
  }

  console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30, "Students", "Sunday")
