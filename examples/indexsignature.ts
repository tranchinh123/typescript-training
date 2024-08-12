interface PersonData {
	[key: string]: string | number;
}

const person: PersonData = {
	name: 'John Doe',
	age: 30,
	email: 'john.doe@example.com',
};

console.log(person.name);
console.log(person['age']);

// with array
interface StringArray {
	[index: number]: string;
}

const myArray: StringArray = ['apple', 'banana', 'cherry'];
console.log(myArray[1]);

//
interface CacheStore {
	items: { [key: string]: any };
	expires: { [key: string]: number };
}

const cache: CacheStore = {
	items: {
		user: { id: 1, name: 'John' },
		post: { id: 123, title: 'Hello, world!' },
	},
	expires: {
		user: 3600, // Cached for 1 hour
		post: 86400, // Cached for 1 day
	},
};

console.log(cache.items.user.name); // Output: "John"
console.log(cache.expires.post); // Output: 86400
