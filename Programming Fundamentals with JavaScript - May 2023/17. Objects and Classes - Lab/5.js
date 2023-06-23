function cats(input) {
  class Cat {
    constructor(name, age) {
      this.name = name
      this.age = age
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`)
    }
  }

  for(cat of input) {
    let [name, age] = cat.split(" ")
    let catTemp = new Cat(name, age)

    catTemp.meow()
  }
}

cats(['Mellow 2', 'Tom 5'])
