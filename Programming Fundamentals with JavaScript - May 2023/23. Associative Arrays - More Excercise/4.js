function books(input) {
  let shelves = {}

  for(el of input) {
    if(el.includes("->")) {
      let shelfId = "id " + el.split(" -> ")[0]
      let genre = el.split(" -> ")[1]

      if(shelves[shelfId] === undefined) {
        shelves[shelfId] = {
          genre: genre,
          bookCount: 0,
          bookList: {}
        }
      }
    } else if(el.includes(":")) {
      let title = el.split(": ")[0]
      let author = el.split(": ")[1].split(", ")[0]
      let genre = el.split(": ")[1].split(", ")[1]

      if(genre === 'scifi') {
        genre = 'sci-fi'
      }

      for(id in shelves) {
        if(shelves[id]['genre'] === genre) {
          shelves[id]['bookList'][title] = {author, genre}
          shelves[id]['bookCount']++
        }
      }
    }
  }

  let sortedShelves = {}
  
  Object.entries(shelves).sort((a, b) => b[1]['bookCount'] - a[1]['bookCount']).forEach((el) => {
    let id = el[0]

    sortedShelves[id] = shelves[id]
  })

  for(id in sortedShelves) {
    let sortedBooksKeys = Object.keys(sortedShelves[id]['bookList']).sort((a, b) => a.localeCompare(b))

    console.log(`${id.split("id ")[1]} ${sortedShelves[id]['genre']}: ${sortedShelves[id]['bookCount']}`)

    sortedBooksKeys.forEach(title => console.log(`--> ${title}: ${sortedShelves[id]['bookList'][title]['author']}`))
  }
}

books(['1 -> history', '1 -> action', 'Death in Time: Criss Bell, mystery', '2 -> mystery', '3 -> sci-fi', 'Child of Silver: Bruce Rich, mystery', 'Hurting Secrets: Dustin Bolt, action', 'Future of Dawn: Aiden Rose, sci-fi', 'Lions and Rats: Gabe Roads, history', '2 -> romance', 'Effect of the Void: Shay B, romance', 'Losing Dreams: Gail Starr, sci-fi', 'Name of Earth: Jo Bell, scifi', 'Pilots of Stone: Brook Jay, history'])
