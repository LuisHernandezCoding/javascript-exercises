const findTheOldest = function(people) {
    const orderedPeople = people.sort((a,b) => 
    (a.yearOfBirth - ((typeof a.yearOfDeath === 'undefined') 
                    ? new Date().getFullYear() : a.yearOfDeath)) > 
    (b.yearOfBirth - ((typeof b.yearOfDeath === 'undefined') 
    ? new Date().getFullYear() : b.yearOfDeath))
    ? 1 : -1)
    return orderedPeople[0]
};

// Do not edit below this line
module.exports = findTheOldest;