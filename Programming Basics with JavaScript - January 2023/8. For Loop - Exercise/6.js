function oscars(input) {
  let actorName = input[0]
  let actorScore = Number(input[1])
  let jury = input.slice(3)
  
  for(let i = 0; i < jury.length; i += 2) {
    let name = jury[i]
    let points = Number(jury[i + 1])

    actorScore += (name.length * points) / 2

    if(actorScore >= 1250.5) break;
  }

  if(actorScore < 1250.5) {
    console.log(`Sorry, ${actorName} you need ${(1250.5 - actorScore).toFixed(1)} more!`)
  } else {
    console.log(`Congratulations, ${actorName} got a nominee for leading role with ${actorScore.toFixed(1)}!`)
  }
}

oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])
