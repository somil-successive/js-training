// 2. Write a program to display following output as shown in figure

function printPattern1() {
  let counter = 1;
  for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += counter;
      counter++;
    }
    console.log(row);
  }
}

function printPattern2() {
  for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }
}

function printPattern3() {
  let counter = 5;
  for (let i = 1; i <= 9; i++) {
    let row = "";
    for (let j = 1; j <= counter; j++) {
      row += j;
    }
    console.log(row);
    if (i <= 4) {
      counter--;
    } else {
      counter++;
    }
  }
}
