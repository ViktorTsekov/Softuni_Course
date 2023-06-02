function passwordValidator(password) {
  let isOfSufficientLength = false
  let consistsOnlyOfLettersAndDigits = true
  let containsAtLeast2Digits = false

  let numberOfDigits = 0
  let specialCharacters = "[]`!@#$%^&*()_+-={};':\"\\/|,.<>?~"

  if(password.length >= 6 && password.length <= 10) {
    isOfSufficientLength = true
  }

  password.split("").forEach(element => {
    if(specialCharacters.includes(element)) {
      consistsOnlyOfLettersAndDigits = false
    }

    if(element >= '0' && element <= '9') {
      numberOfDigits++
    }
  })

  containsAtLeast2Digits = numberOfDigits >= 2

  if(isOfSufficientLength && consistsOnlyOfLettersAndDigits && containsAtLeast2Digits) {
    console.log("Password is valid")
  } else {
    if(!isOfSufficientLength) {
      console.log("Password must be between 6 and 10 characters ")
    }

    if(!consistsOnlyOfLettersAndDigits) {
      console.log("Password must consist only of letters and digits")
    }

    if(!containsAtLeast2Digits) {
      console.log("Password must have at least 2 digits")
    }
  }
}

passwordValidator('logIn')
