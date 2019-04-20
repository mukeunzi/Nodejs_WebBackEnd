const todos = module.require('./data');

const todoList = todos.reduce((acc, cur) => {
	if (acc[cur.status] === undefined) {
		acc[cur.status] = [cur.name];
	} else {
		acc[cur.status].push(cur.name);
	}
	return acc;
}, {});

//console.log(todoList);

const show = input => {
	if (input === 'all') {
		showAll();
	}
};

const showAll = () => {
	let statusResult = [];
	for (status in todoList) {
		statusResult.push(`${status} : ${todoList[status].length}개`);
	}
	console.log(`현재상태 : ${statusResult.join(', ')}`);
};
showAll();
