function santasLittleHelper(input) {
  let key = Number(input.shift())
  let curLine = input.shift()
  let result = []

  while(curLine !== 'end') {
    let decodedMessage = curLine.split('').map((el, index) => String.fromCharCode(curLine.charCodeAt(index) - key)).join('') 
    let name = decodedMessage.match(/@[A-Za-z]+[^@\-!:>]/g)[0].replace(/[^A-Za-z]/g, '')
    let goodness = decodedMessage.match(/![GN]!/g)[0]

    if(goodness.includes('G')) {
      result.push(name)
    }

    curLine = input.shift()
  }

  console.log(result.join('\n'))
}

santasLittleHelper([4, '~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%', '0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf', ';:<lyiljz{onzDPere=;=9<;8=rhknlf%K%', `Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn`, 'DReh}e=<4lhzj1%K%', 'end'])
