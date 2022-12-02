//Objet : deux manières de rajouter un attribut :
const obj0 = {
    greeting : "hello" 
}

let name = obj0.name
obj0.name = 'cristiano'
let lastName = obj0["corti"] //?

// console.log(obj0)



//Objet : comment boucle-t-on sur un objet ? 
for (const key in obj0) {
        console.log(obj0[key])
}




//Objet : rajouter deux méthode de 2 manières différentes : 

const obj1 = {
    greeting : "hello",
    sayHello(){
        console.log(this.greeting)
    } 
}

//Objet : à partir de l'objet suivant, renvoyez un tableau comportant uniquement les clés de l'objet :
const obj = {
    width : '10px',
    height : '10px',
    color : 'red'
}

//Je ne sais pas?



//Class : écrivez une class (prenom, nom, age) et instanciez vous !
class Person {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getLastName() {
        return this.lastName;
    }

    getAge() {
        return this.age;
    }
}

let Person1 = new Person('cristiano', 'corti', 26)
console.log(Person1)




//Ecrivez une sous-classe (possible de réutiliser la classe ci dessus)
class Dog extends Person {
    constructor(name, lastName, age, color) {
        super(name, lastName, age);
        this.color = color;
    }
    getName() {
        return this.name;
    }
    getLastName() {
        return this.lastName;
    }
    getAge() {
        return this.age;
    }
    getColor() { return this.color; }
}
let Dog1 = new Dog('doggo', 'aww', 26, 'white')
console.log(Dog1)



//Les 4 cas où la console renvoie undefined 

