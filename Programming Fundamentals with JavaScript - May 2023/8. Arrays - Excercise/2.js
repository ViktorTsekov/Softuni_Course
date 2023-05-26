function commonElements(arr1, arr2) {
  let result = ""

  arr1.forEach(element1 => {
    arr2.forEach(element2 => {
      if(element1 === element2) {
        result += element1 + "\n"
      }
    })
  })

  console.log(result)
}

commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'])
