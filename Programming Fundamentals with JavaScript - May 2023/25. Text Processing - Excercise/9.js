function passwordGenerator(arr) {
  const vowels = 'aeiou'

  let str = '' + arr[0] + arr[1]
  let str3 = arr[2]
  let password = ''
  let str3Index = 0

  str.split('').forEach(element => {
    if(vowels.includes(element)) {
      password += str3[str3Index].toUpperCase()
      str3Index++

      if(str3Index >= str3.length) {
        str3Index = 0
      }
    } else {
      password += element
    }
  })

  console.log(`Your generated password is ${password.split('').reverse().join('')}`)
}

passwordGenerator(['ilovepizza', 'ihatevegetables', 'orange'])
