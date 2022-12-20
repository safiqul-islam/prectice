const obj1 = {
    firstName:'safiqul',
    lastName:'islam',
    age:23,
    job:'Laravel Developer',
    friend:['nayan','reza','rasel']
};

const nameKey = obj1['firstName']+' '+obj1['lastName'];
console.log(nameKey);

const input = prompt('Enter the name from this example (safiq)');
console.log(obj1[input]);