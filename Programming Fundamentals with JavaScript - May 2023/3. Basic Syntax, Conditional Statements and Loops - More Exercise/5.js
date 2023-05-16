function distanceBetweenPoints(x1, y1, x2, y2) {
  const x = Math.abs(x2 - x1)
  const y = Math.abs(y2 - y1)
  const distance = Math.sqrt(x * x + y * y)

  console.log(distance)
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)
