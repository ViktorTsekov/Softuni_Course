function valueOfAString(arr) {
  let text = arr[0]
  let casing = arr[1]
  let sum = 0

  if(casing === 'LOWERCASE') {
    text.split('').forEach(element => {
      if(element === element.toLowerCase()) {
        let asciiCode = element.charCodeAt(0)

        if(asciiCode >= 97 && asciiCode <= 122) {
          sum += asciiCode
        }
      }
    })
  } else {
    text.split('').forEach(element => {
      if(element === element.toUpperCase()) {
        let asciiCode = element.charCodeAt(0)

        if(asciiCode >= 65 && asciiCode <= 90) {
          sum += asciiCode
        }
      }
    })
  }

  console.log(`The total sum is: ${sum}`)
}

valueOfAString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE'])
