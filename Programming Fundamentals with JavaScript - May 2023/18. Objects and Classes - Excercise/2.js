function towns(input) {
  for(town of input) {
    let [townName, lat, lng] = town.split(" | ")
    let tempTown = {}

    tempTown["town"] = townName
    tempTown["latitude"] = Number(lat).toFixed(2)
    tempTown["longitude"] = Number(lng).toFixed(2)

    console.log(tempTown)
  }
}

towns(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625'])
