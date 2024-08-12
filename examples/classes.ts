class Person {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	getFullName(): string {
		return `My fullName is ${this.firstName} ${this.lastName}`;
	}
}
const person = new Person('John', 'Dang');
console.log(person);
console.log(person.getFullName());

class Student extends Person {
	grade: number;

	constructor(firstName: string, lastName: string, grade: number) {
		super(firstName, lastName);
		this.grade = grade;
	}
	studyHard(): string {
		return `${this.grade}`;
	}
}
const student = new Student('Henry', 'John', 10);
console.log(student);
console.log(student.getFullName());
console.log(student.studyHard());
