function primeNumberCheck(Number) {
  const num = parseInt(Number);

  let isPrime = true;

  if (num >= 2) {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${Number} is a prime number`);
      return true;
    } else {
      console.log(`${Number} is not a prime number`);
      return false;
    }
  } else {
    console.log(`${Number} is not a prime number`);
    return false;
  }
}
console.log(primeNumberCheck(5));
