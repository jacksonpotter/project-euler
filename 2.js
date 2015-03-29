var fib = function (x) {
  if (x <= 0) {
    return 1;
  } else {
    return (fib(x - 1) + fib(x - 2));
  }
}

var sum = 0
var x = 0
var i = 0

while (x < 4000000) {
  x = fib(i);

  if (x % 2 == 0) {
    sum = sum + x;
  }
 
  i = i + 1;

  console.log(x + ' ' + sum);
}
