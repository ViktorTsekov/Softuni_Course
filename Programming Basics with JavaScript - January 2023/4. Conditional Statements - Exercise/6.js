function worldSwimmingRecord(input) {
  let record = Number(input[0])
  let distance = Number(input[1])
  let timePerMeter = Number(input[2])

  let timeInterruptions = Math.floor(distance / 15)
  let totalTime = (distance * timePerMeter) + (timeInterruptions * 12.5)

  if(totalTime < record) {
    console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`)
  } else {
    console.log(`No, he failed! He was ${(totalTime - record).toFixed(2)} seconds slower.`)
  }
}

worldSwimmingRecord(["10464", "1500", "20"])
