const todos = module.require('./data');

const todoList = todos.reduce((acc, cur) => {
	if (acc[cur.status] === undefined) {
		acc[cur.status] = [cur.name];
	} else {
		acc[cur.status].push(cur.name);
	}
	return acc;
}, {});

console.log(todoList);
