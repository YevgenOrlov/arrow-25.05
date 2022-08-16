function sum(a, b) {
  return a + b;
}

document.querySelector(".b-1").addEventListener("click", function () {
  let res = sum(23, 45);
  console.log(res);
});

const ar1 = [4, 5, 6, 7, 8]; //
function pow(a) {
  return a ** 2;
}
const res2 = ar1.map(function (a) {
  // метод "map"  массива с анонимной функцией одного аргумента
  return a ** 2;
});
console.log(res2);

const res4 = ar1.map((a) => {
  // замена анонимной функции стрелочной
  return a ** 2;
});

console.log(res4);

const res5 = ar1.map((a) => a ** 2); // при одном выражении не надо {}, и происходит неявный возврат
console.log(res5);
console.log(ar1);

const res6 = ar1.map((a) => a ** 2); //при одном аргументе скобки вокруг него можно убрать
console.log(res6);
console.log(ar1);
