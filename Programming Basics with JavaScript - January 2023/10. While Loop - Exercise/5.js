function coins(input) {
  let change = Number(input[0]) * 100;

  let twoLev = Math.floor(change / 200); change -= twoLev * 200;
  let oneLev = Math.floor(change / 100); change -= oneLev * 100;
  let fiftyStotinki = Math.floor(change / 50); change -= fiftyStotinki * 50;
  let twentyStotinki = Math.floor(change / 20); change -= twentyStotinki * 20;
  let tenStotinki = Math.floor(change / 10); change -= tenStotinki * 10;
  let fiveStotinki = Math.floor(change / 5); change -= fiveStotinki * 5;
  let twoStotinki = Math.floor(change / 2); change -= twoStotinki * 2;
  let oneStotinki = change;

  console.log(twoLev + oneLev + fiftyStotinki + twentyStotinki + tenStotinki + fiveStotinki + twoStotinki + oneStotinki);
}

coins(["3"])
