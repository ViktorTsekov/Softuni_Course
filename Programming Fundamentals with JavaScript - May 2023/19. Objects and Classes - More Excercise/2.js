function flightSchedule(input) {
  let flights = input[0]
  let cancelledFlights = input[1]
  let statusToBePrinted = input[2][0]

  let flightsArr = []

  for(flight of flights) {
    let flightNumber = flight.split(" ")[0]
    let flightDestination = flight.split(" ").slice(1).join(" ")
    let obj = {}

    obj[flightNumber] = {
      Destination: flightDestination,
      Status: 'Ready to fly'
    }

    flightsArr.push(obj)
  }

  for(flight of cancelledFlights) {
    let flightNumber = flight.split(" ")[0]
    let flightIndex = flightsArr.findIndex(el => {
      let key = Object.keys(el)[0]

      return flightNumber === key
    })

    if(flightIndex !== -1) {
      flightsArr[flightIndex][flightNumber].Status = 'Cancelled'
    }
  }

  flightsArr
    .filter(el => {
      let key = Object.keys(el)[0]

      return el[key].Status === statusToBePrinted
    })
    .forEach(el => {
      let key = Object.keys(el)[0]

      console.log(el[key])
    })
}

flightSchedule([['WN269 Delaware', 'FL2269 Oregon', 'WN498 Las Vegas', 'WN3145 Ohio', 'WN612 Alabama', 'WN4010 New York', 'WN1173 California', 'DL2120 Texas', 'KL5744 Illinois', 'WN678 Pennsylvania'], ['DL2120 Cancelled', 'WN612 Cancelled', 'WN1173 Cancelled', 'SK430 Cancelled'], ['Cancelled']])
