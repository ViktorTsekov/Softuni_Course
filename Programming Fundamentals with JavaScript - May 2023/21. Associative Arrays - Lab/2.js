function meetings(input) {
  let meetings = {}

  for(el of input) {
    let [weekday, name] = el.split(" ")

    if(meetings.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}!`)
    } else {
      meetings[weekday] = name
      console.log(`Scheduled for ${weekday}`)
    }
  }

  for(key in meetings) {
    console.log(`${key} -> ${meetings[key]}`)
  }
}

meetings(['Monday Peter', 'Wednesday Bill', 'Monday Tim', 'Friday Tim'])
