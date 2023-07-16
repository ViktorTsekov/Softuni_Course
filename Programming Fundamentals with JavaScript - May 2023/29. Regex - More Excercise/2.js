function rageQuit(input) {
  let regex = /[^\d]+[\d]+/g
  let matches = input[0].toUpperCase().match(regex)
  let results = []
  let uniqueSymbols = ''

  for(match of matches) {
    let str = ''
    let repetitions = ''

    for(let i = 0; i < match.length; i++) {
      let el = match.charAt(i)

      if(el.match(/\d/) === null) {
        if(!uniqueSymbols.includes(el)) {
          uniqueSymbols += el
        }

        str += el
      } else {
        repetitions += el
      }
    }

    results.push(str.repeat(repetitions))
  }

  console.log("Unique symbols used:", uniqueSymbols.length)
  console.log(results.join(''))
}

rageQuit(['e-!btI17z=E:DMJ19U1Tvg VQ>11'])
