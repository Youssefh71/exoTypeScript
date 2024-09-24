// challenge.ts

// Définir l'interface
interface User {
    name: string;
    age?: number; // 'age' est optionnel, ce qui permet de ne pas avoir cette propriété


}

const prettyPrintWilder = (users: User[]): void => {

    users.map((user) => {
        if (user.age !== undefined) {
            console.log(`${user.name} is ${user.age} years old`);
            
        } else {
            
        }
      console.log(`${user.name} is ${user.age} years old`);
      console.log(`${user.name} n'a pas d'âge specifié`);
    });
  };
  

  const wilders: User[] = [];
  const user1 = { name: "Pierre", age: 23 };
  const user2 = { name: "Paul"}; // 'birthday' a été retiré
  const user3 = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);