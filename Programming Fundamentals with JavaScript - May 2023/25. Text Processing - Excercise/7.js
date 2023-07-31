function cutAndReverse(str) {
  let halfA = str.slice(0, str.length / 2)
  let halfB = str.slice(str.length / 2, str.length)

  console.log(halfA.split('').reverse().join(''))
  console.log(halfB.split('').reverse().join(''))
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')
