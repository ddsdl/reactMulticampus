console.log('----------------- Object.create - 직접 상속 -----------------');
const one = { name: '놀부' };
console.log(one);

const two = Object.create(null);
two.name = '흥부';
console.log(two);

// const three = new Object();
const three = Object.create(Object.prototype);
const threeArr = Object.create(Array.prototype);
console.log(three);
console.log(threeArr);
console.log('');

const four = Object.create(null, {
  name: { value: 'NolBu' },
  age: { value: 20, writable: true },
});
four.name = '변경 안됨';
four.age = 100;
console.log(four);

const five = Object.create(Object.prototype, {
  name: { value: 'NolBu' },
  age: { value: 20, writable: true },
});
five.name = '변경 안됨';
five.age = 100;
console.log(five)
console.log('');


const sixPrototype = {
  getName() {
    return this.name;
  },
  view() {
    console.log(`${this.name} / ${this.age}`);
  }
}
const six = Object.create(sixPrototype, {
  name: { value: 'NolBu' },
  age: { value: 20, writable: true },
})
console.log(six.getName());
six.view();
