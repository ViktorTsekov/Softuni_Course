function employees(input) {
  class Employee {
    constructor(name, personalNumber) {
      this.name = name
      this.personalNumber = personalNumber
    }

    print() {
      console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`)
    }
  }
  
  for(employee of input) {
    let tempEmployee = new Employee(employee, employee.length)

    tempEmployee.print()
  }
}

employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])
