function numbers(input) {
  let numbers = input[0].split(" ")
  let commands = input.slice(1)

  commands.forEach(element => {
    let command = element.split(" ")

    if(command[0] === "Add") {
      numbers.push(command[1])
    } else if(command[0] === "Remove") {
      let numbersStr = numbers.join(" ").replace(command[1], "-")

      numbers = numbersStr.split(" ").filter(el => el !== "-")
    } else if(command[0] === "Replace") {
      let numbersStr = numbers.join(" ").replace(command[1], command[2])

      numbers = numbersStr.split(" ")
    } else if(command[0] === "Collapse") {
      numbers = numbers.map(el => Number(el)).filter(el => el >= Number(command[1])).filter(el => el.toString())
    } else if(command[0] === "Finish") {
      console.log(numbers.join(" "))
    }
  })
}

numbers(["1 4 5 19", "Add 1", "Remove 4", "Finish"])
