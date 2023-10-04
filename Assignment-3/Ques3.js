//  Write a program to display Diamond Pattern

function printDiamondPattern() {
  let space = 4;
  let stars = 1;

  for (let i = 1; i <= 9; i++) {
    let row = "";
    for (let j = space; j >= 0; j--) {
      row += " ";
    }
    for (let j = 1; j <= stars; j++) {
      row += "*";
      row += " ";
    }

    if (i < 5) {
      space--;
      stars++;
    } else {
      space++;
      stars--;
    }
    console.log(row);
  }
}
