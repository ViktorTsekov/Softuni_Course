function phoneBook(input) {
  let phoneBook = {}

  for(el of input) {
    let [name, number] = el.split(" ")

    phoneBook[name] = number
  }

  for(key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`)
  }
}

phoneBook(['Tim 0834212554', 'Peter 0877547887', 'Bill 0896543112', 'Tim 0876566344'])
