function loadingBar(n) {
  let loadingStatus = ""

  if(n === 100) {
    console.log("100% Complete!")
    return
  }

  for(let i = 0; i < n / 10; i++) {
    loadingStatus += "%"
  }

  for(let i = 0; i < 10 - (n / 10); i++) {
    loadingStatus += "."
  }

  console.log(`${n}% [${loadingStatus}]`)
  console.log("Still loading...")
}

loadingBar(50)
