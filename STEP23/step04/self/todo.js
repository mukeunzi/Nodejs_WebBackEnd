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

const show = type => {
	if (type === 'all') {
		printAll();
	} else {
		printStatus(type);
	}
};

const printAll = () => {
	let statusResult = [];
	for (status in todoList) {
		statusResult.push(`${status} : ${todoList[status].length}개`);
	}
	console.log(`현재상태 : ${statusResult.join(', ')}`);
};

const printStatus = type => {
	console.log(`${type} LIST : 총${todoList[type].length}건 : ${todoList[type]}`);
};

show('all');
show('todo');
show('doing');
show('done');
