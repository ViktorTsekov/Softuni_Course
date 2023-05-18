function rightPlace(str1, letter, str2) {
  str1.split("").forEach((element, index) => {
    if(element === "_") {
      if(letter.toLowerCase() === str2[index].toLowerCase()) {
        console.log("Matched")
      } else {
        console.log("Not Matched")
      }
    }
  })
}

rightPlace("Str_ng", "I", "String")
