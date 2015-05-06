var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }
];

people = people.filter(function(people) {
    return (people.hasSmartphone === true);
});
people = people.sort(function(a, b) {
    return a.age - b.age;
});

console.log("The youngest person is " + people[0].firstname + " " + people[0].lastname);
