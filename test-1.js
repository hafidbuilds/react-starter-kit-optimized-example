const assert = require('assert');
const countSheeps = require('./index-1');

//Data 1
var arrayOfSheeps = [
					true,  true,  true,  false,
              		true,  true,  true,  true ,
              		true,  false, true,  false,
              		true,  false, false, true ,
              		true,  true,  true,  true ,
              		false, false, true,  true
              		];


assert.equal(countSheeps(arrayOfSheeps), 17);