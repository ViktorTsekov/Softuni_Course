function workout(input) {
  let kilometersRan = Number(input[1])
  let totalKilometers = kilometersRan

  input.slice(2).forEach(element => {
    kilometersRan = kilometersRan + (kilometersRan * (Number(element) / 100))
    totalKilometers += kilometersRan
  })

  if(totalKilometers >= 1000) {
    console.log(`You've done a great job running ${Math.ceil(Math.abs(totalKilometers - 1000))} more kilometers!`)
  } else {
    console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(Math.abs(totalKilometers - 1000))} more kilometers`)
  }
}

workout(["5", "30", "10", "15", "20", "5", "12"])
