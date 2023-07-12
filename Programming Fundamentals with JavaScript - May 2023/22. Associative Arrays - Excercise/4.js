function partyTime(input) {
  let vipGuests = new Set()
  let regularGuests = new Set()
  let listOfGuests = input.slice(0, input.indexOf("PARTY"))
  let arrivingGuests = input.slice(input.indexOf("PARTY") + 1, input.length)

  for(el of arrivingGuests) {
    if(listOfGuests.includes(el)) {
      listOfGuests.splice(listOfGuests.indexOf(el), 1)
    }
  }

  listOfGuests.forEach(element => {
    if(!isNaN(Number(element.charAt(0)))) {
      vipGuests.add(element)
    } else {
      regularGuests.add(element)
    }
  })

  let numberOfGuests = vipGuests.size + regularGuests.size

  console.log(numberOfGuests)
  vipGuests.forEach(el => console.log(el))
  regularGuests.forEach(el => console.log(el))
}

partyTime(['m8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK', 'PARTY', '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1', 'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'])
