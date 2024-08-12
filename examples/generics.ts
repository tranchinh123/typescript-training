interface Student<T> {
	id: number;
	name: string;
	age: T;
}
const numberList: Array<number> = [1, 2, 3];
const wordList: Array<string> = ['easy', 'frontend'];
const studentList: Array<Student<number>> = [
	{ id: 1, name: 'Alice', age: 30 },
	{ id: 2, name: 'Bob', age: 40 },
];
console.log(numberList);
console.log(wordList);
console.log(studentList);

//
const makeArr = <T, Y>(x: T, y: Y) => [x, y];
const m = makeArr('string', 5);
console.log(m);
// tuple
const makeTuple = <T, Y>(x: T, y: Y): [T, Y] => [x, y];
const m8 = makeTuple('a', 5);
const m9 = makeTuple<string | null, number>(null, 6);
console.log(m9);
console.log(m8);

// Generics extends
// example1
const makeFullNameConstraint = (obj: {
	firstName: string;
	lastName: string;
}) => ({
	...obj,
	fullName: `${obj.firstName} ${obj.lastName}`,
});

const n1 = makeFullNameConstraint({ firstName: 'henry', lastName: 'john' });
console.log(n1);

const makeFullNameConstraintWithGenerics = <
	T extends { firstName: string; lastName: string },
>(
	obj: T
) => ({
	...obj,
	fullName: `${obj.firstName} ${obj.lastName}`,
});
const n3 = makeFullNameConstraintWithGenerics({
	firstName: 'henry',
	lastName: 'john',
	age: 30,
});
console.log(n3);

// example2
const addNewEmployee = <T extends object>(employee: T) => {
	const randomID = Math.floor(Math.random() * 100);
	return {
		...employee,
		randomID,
	};
};
const em1 = addNewEmployee({ name: 'lisa', age: 30, male: true });
console.log(em1);
