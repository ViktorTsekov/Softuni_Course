function cinema(input) {
  let price = 0

  if(input[0] === "Premiere") {
    price = 12
  } else if(input[0] === "Normal") {
    price = 7.5
  } else if(input[0] === "Discount") {
    price = 5
  }

  console.log((Number(input[1]) * Number(input[2]) * price).toFixed(2))
}

cinema(["Premiere", "10", "12"])
