function fib(i) {
  if (i == 0) return 0;
  if (i == 1) return 1;

  return fib(i - 1) + fib(i - 2);
}

console.log(fib(5));
console.log(fib(4));
console.log(fib(3));
console.log(fib(2));
console.log(fib(20));

function fib(i, cache = {}) {
  if (i == 0) return 0;
  if (i == 1) return 1;

  if (cache[i] == undefined) {
    cache[i] = fib(i - 1, cache) + fib(i - 2, cache);
  }

  return cache[i];
}
