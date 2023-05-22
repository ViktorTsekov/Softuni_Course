function cone(radius, height) {
  const volume = (Math.PI * radius * radius * height) / 3
  const area = (Math.PI * radius * radius) + (Math.PI * radius * (Math.sqrt((radius * radius) + (height * height))))

  console.log(`volume = ${volume.toFixed(4)}`)
  console.log(`area = ${area.toFixed(4)}`)
}

cone(3, 5)
