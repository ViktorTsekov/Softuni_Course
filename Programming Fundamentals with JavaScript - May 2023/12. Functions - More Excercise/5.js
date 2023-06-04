function printDna(n) {
  const dnaHelixes = {
    0: "A T",
    1: "C G",
    2: "T T",
    3: "A G",
    4: "G G",
  }

  const printDnaLine = (helixA, helixB, dnaStructureType) => {
    if(dnaStructureType === 0) return `**${helixA}${helixB}**`
    if(dnaStructureType === 1) return `*${helixA}--${helixB}*`
    if(dnaStructureType === 2) return `${helixA}----${helixB}`
    if(dnaStructureType === 3) return `*${helixA}--${helixB}*`
    if(dnaStructureType === 4) return `**${helixA}${helixB}**`
    if(dnaStructureType === 5) return `*${helixA}--${helixB}*`
    if(dnaStructureType === 6) return `${helixA}----${helixB}`
    if(dnaStructureType === 7) return `*${helixA}--${helixB}*`
  }

  let dnaHelixIndex = 0
  let dnaLineIndex = 0

  for(let i = 0; i < n; i++) {
    let dnaHelix = dnaHelixes[dnaHelixIndex].split(" ")

    console.log(printDnaLine(dnaHelix[0], dnaHelix[1], dnaLineIndex))

    dnaHelixIndex++
    dnaLineIndex++

    if(dnaHelixIndex > 4) dnaHelixIndex = 0
    if(dnaLineIndex > 7) dnaLineIndex = 0
  }
}

printDna(25)
