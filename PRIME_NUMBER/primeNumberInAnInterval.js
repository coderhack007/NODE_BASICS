function primeNumberCheck(num, numnum) {
  const num1 = parseInt(num);

  const num2 = parseInt(numnum);

  let array = [];

  for (let i = num1; i <= num2; i++) {
    let flag = 0;

    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }

    if (i > 1 && flag == 0) {
      array.push(i);
    }
  }

  return array;
}
console.log(primeNumberCheck(0, 50));
