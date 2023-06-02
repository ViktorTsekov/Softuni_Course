function palindromeIntegers(input) {
  input.forEach(element => {
    let isPalindrome = true
    let digits = element.toString().split("")

    for(let i = 0; i < digits.length / 2; i++) {
      if(digits[i] !== digits[digits.length - i - 1]) {
        isPalindrome = false
        break
      }
    }

    console.log(isPalindrome)
  })
}

palindromeIntegers([123, 3, 421, 121])
