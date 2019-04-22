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
	let printResult = [];
	if (type === 'all') {
		printResult = printAll();
	} else {
		printResult = printStatus(type);
	}

	console.log(printResult);
};

const printAll = () => {
	let statusResult = [];
	for (status in todoList) {
		statusResult.push(`${status} : ${todoList[status].length}개`);
	}
	return `현재상태 : ${statusResult.join(', ')}`;
};

const printStatus = type => {
	return `${type} 리스트 : 총${todoList[type].length}건 : ${todoList[type]}`;
};

show('all');
show('todo');
show('doing');
show('done');
