function computerStore(input) {
  let customerType = input[input.length - 1]
  let priceWithoutTaxes = 0

  input.slice(0, input.length - 1).forEach(element => {
    if(Number(element) <= 0) {
      console.log("Invalid price!")
    } else {
      priceWithoutTaxes += Number(element)
    }
  })

  let priceAfterTax = priceWithoutTaxes * 1.2
  let tax = priceWithoutTaxes * 0.2
  let priceAfterDiscount = priceAfterTax

  if(customerType === "special") {
    priceAfterDiscount *= 0.9
  }

  if(priceWithoutTaxes === 0) {
    console.log("Invalid order!")
  } else {
    console.log("Congratulations you've just bought a new computer!")
    console.log(`Price without taxes: ${(priceWithoutTaxes).toFixed(2)}$`)
    console.log(`Taxes: ${(tax).toFixed(2)}$`)
    console.log("-----------")
    console.log(`Total price: ${priceAfterDiscount.toFixed(2)}$`)
  }
}

computerStore([1050, 200, 450, 2, 18.50, 16.86, 'special' ])
