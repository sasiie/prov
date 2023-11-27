// 5.1 Spread med objekt (2p)
// Skriv klart funktionen addIsFast som tar ett bil-objekt och returnerar en kopia
// av objektet och dessutom lägger till egenskapen isFast på det nya objektet.
// Om speed är över 100 ska isFast vara true annars ska det vara false

// const people = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 15 },
//   { name: "Charlie", age: 35 },
//   { name: "Fred", age: 19 },
//   { name: "Alice", age: 6 },
// ];

// function updatePeople(peopleArr) {
//   // Din kod här:
//   return peopleArr.map((person) => {
//     // person.adult = person.age >= 18;
//     // return person;
//     const adult = person.age >= 18;
//     return { ...person, adult: adult };
//   });
// }

// console.log(updatePeople(people))
const car = {
  name: "Volvo",
  speed: 120,
};

// function addIsFast(car) {
//   // Din kod här
//   return car.map((cars) => {
//     const speed = cars.speed >=100;
//     return {...cars, speed: true};
//   });
// }
console.log(addIsFast(car)); // Ska logga { name: "Volvo", speed: 120, isFast: true }

// 5.2  Spread med arrayer (2p)
// Skapa en funktion 'combineArrays' som tar emot två arrayer som argument
// och använder spread operatorn för att kombinera dem till en enda array.
// Returnera den nya arrayen
function combineArrays(arr1, arr2) {
  // Din kod här
  const arr4 = [...arr1, ...arr2];
}

console.log(combineArrays([1, 2, 3], [4, 5, 6])); // Ska logga [1, 2, 3, 4, 5, 6]
