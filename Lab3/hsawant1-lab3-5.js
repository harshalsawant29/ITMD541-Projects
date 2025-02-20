function sortPeopleIntro(people) {

    // Using bubble sort instead of predefined sort function, just because I wanted to

    for (let i = 0; i < people.length - 1; i++) {
        for (let j = 0; j < people.length - i - 1; j++) {
            if (people[j].age > people[j + 1].age) {
                let temp = people[j]; 
                people[j] = people[j + 1];
                people[j + 1] = temp;
            }
        }
    }
    
    return people.map(person => `${person.name} is ${person.age} from ${person.city}`);
}

const intro = [
    {name: 'Hrishi', age: 23, city: 'Mumbai'},
    {name: 'Avi', age: 22, city: 'Ozar'},
    {name: 'Mayur', age: 28, city: 'Satara'},
    {name: 'Harshal', age: 25, city: 'Pune'},
    {name: 'Prateek', age: 27, city: 'Nashik'}
];

console.log(sortPeopleIntro(intro));

const anotherIntro = [
    {name: 'Yash', age: 30, city: 'Nashik'},
    {name: 'Don', age: 29, city: 'Dubai'},
    {name: 'Om', age: 19, city: 'Nagar'},
    {name: 'Rohit', age: 28, city: 'Bangalore'},
    {name: 'Yong', age: 45, city: 'Tokyo'}
];

console.log(sortPeopleIntro(anotherIntro));