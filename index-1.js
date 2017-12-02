//Data
var arrayOfSheeps = [
					true,  true,  true,  false,
              		true,  true,  true,  true ,
              		true,  false, true,  false,
              		true,  false, false, true ,
              		true,  true,  true,  true ,
              		false, false, true,  true 
              		];


function countSheeps(arrayOfSheeps) {  
  var sheepsCounter = 0
  for (var i = 0; i < arrayOfSheeps.length; i++) {
    if (arrayOfSheeps[i] == true) {
      sheepsCounter ++;
    }
  }
  return sheepsCounter;
}

module.exports = countSheeps;