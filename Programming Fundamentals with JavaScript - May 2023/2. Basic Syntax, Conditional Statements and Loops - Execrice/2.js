function rounding(num, precision) {
  console.log(parseFloat(Number(num).toFixed(precision > 15 ? 15 : precision)))
}

rounding(3.1415926535897932384626433832795, 2)
