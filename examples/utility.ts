// Partial <Type>
interface Todo {
	title: string;
	description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
	return { ...todo, ...fieldsToUpdate };
}

const todo1 = {
	title: 'organize desk',
	description: 'clear clutter',
};

const todo2 = updateTodo(todo1, {
	description: 'throw out trash',
});
console.log(todo2);

// Readonly<Type>
interface Todo3 {
	title: string;
}

const todo3: Readonly<Todo3> = {
	title: 'Delete inactive users',
};
console.log(todo3);

// todo3.title = "Hello"; Cannot assign to 'title' because it is a read-only property

// Pick<Type>
interface Todo4 {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = Pick<Todo4, 'title' | 'completed'>;

const todo4: TodoPreview = {
	title: 'Clean room',
	completed: false,
};
console.log(todo4);

//  Required<Type>
interface Props {
	a?: number;
	b?: string;
}

const obj: Props = { a: 5 };
console.log(obj);

// const obj2: Required<Props> = { a: 5 };
// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.

// Omit<Type,key>
interface Todo6 {
	title: string;
	description: string;
	completed: boolean;
	createdAt: number;
}

type TodoPreview2 = Omit<Todo6, 'description'>;

const todo6: TodoPreview2 = {
	title: 'Clean room',
	completed: false,
	createdAt: 1615544252770,
};
console.log(todo6);

type TodoInfo = Omit<Todo6, 'completed' | 'createdAt'>;

const todoInfo: TodoInfo = {
	title: 'Pick up kids',
	description: 'Kindergarten closes at 5pm',
};
console.log(todoInfo);
