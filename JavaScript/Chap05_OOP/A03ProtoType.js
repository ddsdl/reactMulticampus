console.log('---------------- [687] prototype chain -----------------');

function Jumsu(name, kor, eng) {
  this.name = name;
  this.kor = kor;
  this.eng = eng;
  this.getName = function () {
    return this.name;
  };
}

console.log('---------------- getPrototypeOf -----------------');
