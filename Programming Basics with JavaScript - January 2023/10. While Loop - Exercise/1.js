function oldBooks(input) {
  let book = ""

  input.slice(1).filter(element => element !== "No More Books").forEach((element, index) => {
    if(element === input[0]) {
      book = element
      console.log(`You checked ${index} books and found it.`)
      return
    }
  })

  if(book.length === 0) {
    console.log("The book you search is not here!")
    console.log(`You checked ${input.slice(1).filter(element => element !== "No More Books").length} books.`)
  }
}

oldBooks(["The Spot", "Hunger Games", "Harry Potter", "The Spot", "Torronto", "Spotify", "No More Books"])
