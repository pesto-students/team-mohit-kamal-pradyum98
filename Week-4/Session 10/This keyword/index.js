class Person {
    constructor(name,age,gender,nationality){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.nationality = nationality;
    }

    introduce(){
        console.log(`Name: ${this.name} Age: ${this.age} Gender: ${this.gender} Nationality: ${this.nationality}`);
    }
}

class Student extends Person {
    constructor(name, age, gender, nationality, subject) {
        super(name, age, gender, nationality);
        this.subject = subject;
    }

    study() {
        console.log(
            `Name: ${this.name} Age: ${this.age} Gender: ${this.gender} Nationality: ${this.nationality} Study: ${this.subject}`
        );
    }
}

const person1 = new Person('name1','age1','gender1','nationality1');
const person2 = new Person('name2', 'age2', 'gender2', 'nationality2');
const person3 = new Person('name3', 'age3', 'gender3', 'nationality3');

const student = new Student('name4', 'age4', 'gender4', 'nationality4','subject');

person1.introduce();
person2.introduce();
person3.introduce();
student.study();