function dayOfWeek(day) {
  const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday"
  }

  if(days[day] !== undefined) {
    console.log(days[day])
  } else {
    console.log("Invalid day!")
  }
}

dayOfWeek(6)
