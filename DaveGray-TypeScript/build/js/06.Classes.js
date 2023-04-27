"use strict";
class Coder {
    // We can remove this by adding visibility modifiers in the constructor(eg: public, readonly etc..)
    //   name: string;
    //   music: string;
    //   age: number;
    //   lang: string;
    constructor(
    // Visibility modifiers --> Public means the variable is accessible to public
    name, music, age, lang = "TypeScript" // Private vs Protected --> Private can be accessed inside the classes only. Protected can be accessed inside extended class.
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        (this.name = name),
            (this.music = music),
            (this.age = age),
            (this.lang = lang);
    }
    getAge() {
        return `Hello, I,m ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang} using my ${this.computer}`;
    }
}
const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
class Drummer {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Drummer("Jimmy", "guitar");
console.log(Page.play("strums"));
// Static keyword
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
// Static keyword defines a static method/field for the class. it cannot be directly accessed on instances of class, instead it can be accessed on class itself.
Peeps.count = 0;
const john = new Peeps("John");
const steve = new Peeps("Steve");
console.log(john.id);
console.log(steve.id);
console.log(Peeps.getCount());
// Getters and setters
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else {
            throw new Error("Param is not an array of strings");
        }
    }
}
const MyBands = new Bands();
MyBands.data = ["neil", "louis", "ban", "rock"];
MyBands.data = [...MyBands.data, "ZZ TOP", "shadow"];
// MyBands.data = ["Van huelel", 5454]; --> This will throw an error
console.log(MyBands.data);
