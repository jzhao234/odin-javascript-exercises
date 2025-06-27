const findTheOldest = function(people) {
    let oldest = 0;

    for( let i = 0; i < people.length; i++){
        if ("yearOfDeath" in people[i]){
            people[i].age = people[i].yearOfDeath - people[i].yearOfBirth;
            if (people[i].age > oldest){
                oldest = people[i].age;
            }
        } else {
            people[i].age = 2025 - people[i].yearOfBirth;
            if (people[i].age > oldest){
                oldest = people[i].age;
            }
        }
        
    }
    for( let i = 0; i < people.length; i++){
        if (people[i].age == oldest){
            return people[i];
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
