function tradeCommissions(input) {
  let sales = Number(input[1])
  let commission = 0

  if(input[0] === "Sofia") {
    if(sales >= 0 && sales <= 500) {
      commission = 0.05
    } else if(sales > 500 && sales <= 1000) {
      commission = 0.07
    } else if(sales > 1000 && sales <= 10000) {
      commission = 0.08
    } else if(sales > 10000) {
      commission = 0.12
    }
  } else if(input[0] === "Varna") {
    if(sales >= 0 && sales <= 500) {
      commission = 0.045
    } else if(sales > 500 && sales <= 1000) {
      commission = 0.075
    } else if(sales > 1000 && sales <= 10000) {
      commission = 0.1
    } else if(sales > 10000) {
      commission = 0.13
    }
  } else if(input[0] === "Plovdiv") {
    if(sales >= 0 && sales <= 500) {
      commission = 0.055
    } else if(sales > 500 && sales <= 1000) {
      commission = 0.08
    } else if(sales > 1000 && sales <= 10000) {
      commission = 0.12
    } else if(sales > 10000) {
      commission = 0.145
    }
  }

  if(commission === 0) {
    console.log("error")
  } else {
    console.log((commission * sales).toFixed(2))
  }
}

tradeCommissions(["Bourgas", "1500"])
