const findTheOldest = function(people) {
    people.forEach(obj => {
        if(!(`yearOfDeath` in obj)){
            obj.yearOfDeath = new Date().getFullYear();
            console.log(obj.yearOfDeath-obj.yearOfBirth)
        }
    });
    oldest = people.sort((a , b) => {
    const ageA = a.yearOfDeath-a.yearOfBirth;
    console.log(ageA)
    const ageB = b.yearOfDeath-b.yearOfBirth;
    console.log(ageA)
    return ageB-ageA;
    }
    )
return oldest[0]
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1066,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]

  console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
