function bitDestroyer(num, position) {
  let binary = num.toString(2)
  let binaryArr = binary.split("")
  let destroyedBinaryArr = [...binaryArr.slice(0, position), '0', ...binaryArr.slice(position + 1, binaryArr.length)]

  console.log(parseInt(destroyedBinaryArr.join(""), 2))
}

bitDestroyer(1313, 5)
