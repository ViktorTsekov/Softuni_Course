function arenaTier(input) {
  let gladiators = {}

  for(el of input) {
    if(el.includes('->')) {
      let name = el.split(' -> ')[0]
      let skill = el.split(' -> ')[1]
      let points = Number(el.split(' -> ')[2])

      if(gladiators[name] === undefined) {
        gladiators[name] = {}
        gladiators[name]['skills'] = {}
        gladiators[name]['maxPoints'] = points
        gladiators[name]['skills'][skill] = points
      } else {
        gladiators[name]['maxPoints'] += points
        gladiators[name]['skills'][skill] = points
      }
    } else if(el.includes('vs')) {
      let glad1 = el.split(' vs ')[0]
      let glad2 = el.split(' vs ')[1]

      if(gladiators[glad1] !== undefined && gladiators[glad2] !== undefined) {
        let glad1Skills = Object.keys(gladiators[glad1]['skills'])
        let glad2Skills = Object.keys(gladiators[glad2]['skills'])
        let hasCommonTechnique = false

        for(let i = 0; i < glad1Skills.length; i++) {
          if(glad2Skills.includes(glad1Skills[i])) {
            hasCommonTechnique = true
            break
          }
        }

        if(hasCommonTechnique) {
          if(gladiators[glad1]['maxPoints'] > gladiators[glad2]['maxPoints']) {
            delete gladiators[glad2]
          } else {
            delete gladiators[glad1]
          }
        }
      }
    } else if(el === 'Ave Cesar') {
      let sortedGladiators = {}

      Object.entries(gladiators).sort((a, b) => {
        let maxPointsA = gladiators[a[0]]['maxPoints']
        let maxPointsB = gladiators[b[0]]['maxPoints']

        if(maxPointsA !== maxPointsB) {
          return maxPointsB - maxPointsA
        } else {
          return a[0].localeCompare(b[0])
        }
      }).forEach(el => sortedGladiators[el[0]] = el[1])

      for(gladiator in sortedGladiators) {
        let sortedSkills = {}

        Object.entries(sortedGladiators[gladiator]['skills'])
          .sort((a, b) => {
            if (b[1] !== a[1]) {
              return b[1] - a[1]
            } else {
              return a[0].localeCompare(b[0])
            }
          })
          .forEach((el) => sortedSkills[el[0]] = el[1])

        console.log(`${gladiator}: ${sortedGladiators[gladiator]["maxPoints"]} skill`)

        for(skill in sortedSkills) {
          console.log(`- ${skill} <!> ${sortedGladiators[gladiator]['skills'][skill]}`)
        }
      }
    }
  }
}

arenaTier(['Peter -> Duck -> 400', 'Julius -> Shield -> 400', 'Gladius -> Heal -> 200', 'Gladius -> Support -> 200', 'Gladius -> Shield -> 250', 'Ave Cesar'])
