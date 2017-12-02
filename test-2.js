const assert = require('assert');
const countSheeps = require('./index-2');

function titleCase(str) {
    return str.toLowerCase()
          .split(' ')
          .map((word) => {
          return (word.charAt(0).toUpperCase() + word.slice(1))

        }).join(' ');
}

titleCase("HafIDZ iLhaM aJI pERmAnA");

assert.equal(titleCase("HafIDZ iLhaM aJI pERmAnA"), 
  "Hafidz Ilham Aji Permana");



