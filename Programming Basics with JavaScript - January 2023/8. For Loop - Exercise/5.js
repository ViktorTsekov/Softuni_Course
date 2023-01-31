function salary(input) {
  let salary = Number(input[1])

  input.slice(2, input.length).forEach(element => {
    switch(element) {
      case "Facebook": salary -= 150; break;
      case "Instagram": salary -= 100; break;
      case "Reddit": salary -= 50; break;
    }
  })

  if(salary <= 0) {
    console.log("You have lost your salary.")
  } else {
    console.log(salary)
  }
}

salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])
