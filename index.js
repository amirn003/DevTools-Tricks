const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log("Hello");

// Interpolated
console.log('Hello I am %s string.', 'A');
console.log(`Hello I am ${19}.`);

// Styled
console.log('%c Hello I am some great text', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 grey;');

// warning!
console.warn('OH NOO');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 peoples a year!')

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();

// Grouping together
dogs.forEach((dog) => {
  //console.group(`${dog.name}`)
  console.groupCollapsed(`${dog.name}`)
  console.log(`This is ${dog.name}`);
  console.log(`He is ${dog.age} years old`)
  console.log(`He is ${dog.age * 7} dog years old`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/amirn003')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
