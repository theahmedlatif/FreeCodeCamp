// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let nameFound = 0;
  let index = 0;
  let location = 0;

  do {

    if (contacts[index].firstName === name) {
      nameFound = 1;
      location = index;
    }
    index++;

  } while (nameFound == 0 && index < contacts.length);

  if (nameFound == 0) {
    return "No such contact";
  }
  else {
    if (contacts[location].hasOwnProperty(prop))
    {
      return contacts[location][prop];
    }
    else {
      return "No such property";
    }
  }
  // Only change code above this line
}

lookUpProfile("Bob", "number");
