const fs = require('fs');

genders = ['F', 'M'];
maleNames = ['Adam', 'Richard', 'John', 'George', 'William', 'Michael', 'Nicolas', 'Aaron', 'Charles', 'Denis', 
  'Edwin', 'Jack', 'Kevin', 'Patrick', 'Steephen', 'Stanley', 'Uve' ];
famaleNames = ['Anna', 'Barbara', 'Daria', 'Elisabeth', 'Fiona', 'Galina', 'Hanna', 'Irene', 'Laura', 'Monica', 'Nadia', 
  'Olivia', 'Patricia', 'Ronda', 'Susan', 'Ursula', 'Vanessa'];
lastNames = ['Jackson', 'Simson', 'Freeman', 'McCormick', 'Comart', 'Jobs', 'Gates', 'Canals', 'Brown', 'Yellow', 
  'Green', 'Grey', 'Kuhn', 'Kaplan', 'Manson'];
people = [];
peopleFile = './people.json';

function randChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

function randChoiceRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

for ( let i = 0; i < 20; i++)
{
  const genderResult = randChoice(genders);
  const genderArrResult = genderResult === "F" ? famaleNames : maleNames;
  people.push(
    {
      gender: genderResult,
      firstName: randChoice(genderArrResult),
      lastName: randChoice(lastNames),
      age: randChoiceRange(18, 78)
    },
  )
};

const data = JSON.stringify(people, null, 2);


fs.writeFile(peopleFile, data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
