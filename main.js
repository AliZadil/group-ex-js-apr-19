let dataArr = [
  8, 79, 14, 94, 33, 31, 2, 74, 46, 72, 75, 40, 5, 1, 48, 81, 99, 4, 43, 68, 90,
  23, 97, 10, 55, 11, 20, 50, 70, 83, 47, 25, 86, 30, 60, 96, 76, 22, 67, 77,
];

function isPrime(num) {
  if (num == 2 || num == 3) return true;
  if (num <= 1 || num % 2 == 0 || num % 3 == 0) return false;
  for (let i = 5; i * i <= num; i += 6)
    if (num % i == 0 || num % (i + 2) == 0) return false;
  return true;
}

class BaseNumber {
  _number;
  get number(){
    return this._number;
  }
  set number (nbr){
    this._number = nbr;
  }
  getNumber(){
    return this._number;
  }
}

class NumberBucket extends BaseNumber{
  constructor(number=0){
    super();
    this._number = number;
  }
}

class PrimeBucket extends BaseNumber{
  constructor(){
    super();
    this._number = 0;
  }
  set number(nbr){
    isPrime(nbr)? this._number = nbr: nothing;
  }
}
let numbers = [];
for (let i = 0; i < dataArr.length; i++) {
  if(isPrime(dataArr[i])){
    let obj = new PrimeBucket();
    obj.number = dataArr[i];
    numbers.push(obj);
  } else {
    let obj = new NumberBucket();
    obj.number = dataArr[i];
    numbers.push(obj);
  }
}

console.log(numbers);

// print all numbers

console.log("get all numbers:")
// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i].getNumber())  
// }
numbers.map(a => console.log(a.getNumber()))

// print prime numbers

console.log("get only primes:")
// for (let i = 0; i < numbers.length; i++) {
//   if(numbers[i] instanceof PrimeBucket){
//     console.log(numbers[i].getNumber());
//   }  
// }
numbers.map(a => (a instanceof PrimeBucket)? console.log(a.getNumber()): "nothing")