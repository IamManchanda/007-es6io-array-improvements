/**
 * JS
 */

const people = document.querySelectorAll('.people p');
const peopleArray = Array.from(people, person => person.textContent);
console.log(peopleArray);
 
function sumAll() {
  const nums = Array.from(arguments);
  return nums.reduce((prev, next) => prev + next, 0);
}

sumAll(2,34,23,234,234234,234234,2342);

const ages = Array.of(12,4,23,62,34);
