function hardWords(input) {
  let text = input[0]
  let replacementWords = input[1].reduce((prev, cur) => {
    let newObj = {...prev}

    newObj[cur.length] = cur

    return newObj
  }, {})
  let result = ''

  text.split(' ').forEach(element => {
    if(element.includes('_')) {
      result += replacementWords[element.replace(/[^_]/g, '').length] + element.replace(/_/g, '') + ' '
    } else {
      result += element + ' '
    }
  })

  console.log(result)
}

hardWords(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])
