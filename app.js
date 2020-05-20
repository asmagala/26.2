const fs = require('fs');

genders = ['F', 'M'];
maleNames = [];
famaleNames = [];
lastNames = [];
people = [];

for ( let i = 0; i < 20; i++)
  {
    console.log(i);
  };

////
dataArr = ['aa', {b: 'bb', c: 'ccc', d: 'ddd'}, 1123, true];

// data = {};
const data = JSON.stringify(dataArr);


fs.writeFile('./people.json', data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
