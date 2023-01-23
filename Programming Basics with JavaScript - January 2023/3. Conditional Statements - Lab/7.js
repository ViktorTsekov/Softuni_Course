function areaOfFigures(input) {
  let area = 0

  switch(input[0]) {
    case "square": area = Number(input[1]) * Number(input[1]); break;
    case "rectangle": area = Number(input[1]) * Number(input[2]); break;
    case "circle": area = Math.PI * Number(input[1]) * Number(input[1]); break;
    case "triangle": area = (Number(input[1]) * Number(input[2])) / 2; break;
  }
  
  console.log(area)
}

areaOfFigures(["square", "2.5"])
