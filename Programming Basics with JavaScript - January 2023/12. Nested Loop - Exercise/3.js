function sumPrimeNonPrime(input) {
  let primeSum = 0
  let nonPrimeSum = 0

  input.forEach(element => {
    let curNumber = Number(element)

    if(!isNaN(curNumber)) {
      if(curNumber < 0) {
        console.log("Number is negative.")
      } else {
        let isPrime = true
        let divider = 2

        while(divider < curNumber) {
          if(curNumber % divider === 0) {
            isPrime = false
            break
          }

          divider++
        }

        if(isPrime) {
          primeSum += curNumber
        } else {
          nonPrimeSum += curNumber
        }
      }
    }
  })

  console.log(`Sum of all prime numbers is: ${primeSum}`)
  console.log(`Sum of all non prime numbers is: ${nonPrimeSum}`)
}

sumPrimeNonPrime(["3", "9", "0", "7", "19", "4", "stop"])
