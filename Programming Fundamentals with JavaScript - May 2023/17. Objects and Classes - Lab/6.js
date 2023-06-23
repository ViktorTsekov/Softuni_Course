function songs(input) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList
      this.name = name
      this.time = time
    }

    print(typeList) {
      if(typeList === "all") {
        console.log(this.name)
      } else {
        if(this.typeList === typeList) {
          console.log(this.name)
        }
      }
    }
  }

  input.slice(1, input.length - 1).forEach(song => {
    let [typeList, name, time] = song.split("_")
    let tempSong = new Song(typeList, name, time)

    tempSong.print(input[input.length - 1])
  })
}

songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01', 'favourite'])
