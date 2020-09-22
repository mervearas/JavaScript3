class Person {
    constructor(name, age, city, married, amountOfChildren, job, thingsLike) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.married = married;
        this.amountOfChildren = amountOfChildren;
        this.job = job;
        this.thingsLike = thingsLike;
    }
}

const abdulkareem = new Person("Abdulkareem","39", "Riyadh", true, 3, "construction worker", ["eating date", "smoking water pipe"]);

class Animal {
    constructor(kind, name, age, color, eatingType, ability) {
        this.kind = kind;
        this.name = name;
        this.age = age;
        this.color = color;
        this.eatingType = eatingType;
        this.ability = ability;
    }
}

const horse = new Animal("horse", "Adel", "15", "brown", "grass", "transport materials");