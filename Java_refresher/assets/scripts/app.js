//import { apiKey, abc as gia_tri_abc } from "./util.js";

//console.log(gia_tri_abc);

//import { apiKey, abc } from "./util.js";

//import * as tat_ca_gia_tri from "./util.js";

//let useMess = "Hello world";
//useMess = "doi gia tri";

//const useMess_2 = "gia tri 2";


//console.log( 'voi let : ' + useMess);
//console.log( 'voi const : ' + useMess_2 );

//console.log(10+5);
//console.log('hello' + 'world');

//console.log('--------')

//console.log(10===10);
//console.log(10>=5);
//console.log(10===2);

//if (10===10){
//    console.log('work');
//}

/*
function greet(userName, message) {
    console.log(userName);
    console.log(message);
}


greet('Hoang Hai Nam', 'tôi tên là Nam');

*/

/*
function greet(userName, message='hello') {
    console.log(userName);
    console.log(message);
}

greet('Hoang Hai Nam');
greet('Max', 'goodbye');

*/

/*
function greet(userName, message='hello') {
    
    return 'hi, i am ' + userName + '.' + message;
}

const greeting1 = greet('Max');
console.log(greeting1);

const greeting2 = greet('nam', 'goodbye');
console.log(greeting2);
*/

/*const greet = (userNam, message) => {
    return userNam + ' ' + message;
}

console.log(greet('Nam', "hello"));
*/

/*
const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log('Hello');
        console.log(this.age);
    }
};

console.log(user);

console.log(user.name);

user.greet();
*/

/*
class User {
    contructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log('hi');
    }
}

const user1 = new User('Nam', 35);
console.log(user1);
user1.greet();
*/

/*
const hobbies = ["sport", "cocking", "Reading"];
console.log(hobbies[0]);

hobbies.push('Coding');
console.log(hobbies);

const index = hobbies.findIndex((item) => {
    return item === "Reading";
});
console.log(index);

const index3 = hobbies.findIndex((item) => item === "sport");
console.log(index3);

const index2 = hobbies.findIndex((item) => {
    return item === "hooking";
});
console.log(index2);

const newHobbies = hobbies.map( (item) => item + '!' );
console.log(newHobbies);

const newHobbies2 = hobbies.map( (item) => ({ text: item, length: item.length }) );
console.log(newHobbies2);

*/

/*

const userNameData = ['HOANG', 'Hai Nam'];
const firstName = userNameData[0];
const lastName = userNameData[1];
console.log(firstName, lastName);

const [firstName1, lastName1] = ['HOANG', 'Hai Nam'];
console.log(firstName1, lastName1);

const user = {
    name: 'Max',
    age: 30,
};
const name = user.name;
const age = user.age;
console.log(name, age);

const { name1, age1 } = {
    name1: 'Max',
    age1: 30,
};
console.log(name1, age1);

const {name2: userName, age2} = {
    name2: 'Max',
    age2: 30,
};
console.log(userName, age2);

*/

/*

const hobbies = ['sport', 'cooking'];
const newHobbies = ['reading'];

const mergedHobbies = [...hobbies, ...newHobbies];
console.log(mergedHobbies);

const user = {
    name: 'Max',
    age: 30,
};

const extendedUser = {
    isAdmin: true,
    ...user,
};
console.log(extendedUser);

*/

/*

const password = prompt('Enter your password');

if ( password === 'Hello' ) {
    console.log('Hello word');
} else if ( password === 'Hi' ) {
    console.log('Hi word');
} else {
    console.log('Invalid password');
}

const hobbies = ['sport', 'cooking'];

for (const hobby of hobbies) {
    console.log(hobby);
}

*/

/*

function handleTimeout() {
    console.log('Timeout completed');
}

const handleTimeout2 = () => {
    console.log('Timeout completed 2');
}

setTimeout(handleTimeout, 1000);
setTimeout(handleTimeout2, 2000);
setTimeout( () => {
    console.log('Timeout completed 3');
}, 3000);

function greeter (greetFn) {
    greetFn();
}

greeter( () => { console.log('Hello'); } );

*/

/*
function init() {
    function greet() {
        console.log('Hello');
    }
    return greet;
}

const greet = init();
greet();
*/

let userMessage = 'Hello';

const hobbies = ['sport', 'cooking'];
// hobbies = ['reading'];
hobbies.push('reading');
console.log(hobbies);



