function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(persons: string[]): string {
  return "Hello, " + persons.join(' ');
}

let user = ["Jane", "Doe"];
console.log(greeterArray(user)); //This will not cause an error
console.log(greeter(user.join(' '))); //This will not cause an error