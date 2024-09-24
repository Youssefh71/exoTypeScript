"use strict";
// challenge.ts
const prettyPrintWilder = (users) => {
    users.map((user) => {
        if (user.age !== undefined) {
            console.log(`${user.name} is ${user.age} years old`);
        }
        else {
        }
        console.log(`${user.name} is ${user.age} years old`);
        console.log(`${user.name} n'a pas d'âge specifié`);
    });
};
const wilders = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul" }; // 'birthday' a été retiré
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
