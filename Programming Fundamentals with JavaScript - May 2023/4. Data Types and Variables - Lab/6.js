function gramophone(band, album, song) {
  const songDuration = (album.length * band.length) * (song.length / 2)

  console.log(`The plate was rotated ${Math.ceil(songDuration / 2.5)} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
