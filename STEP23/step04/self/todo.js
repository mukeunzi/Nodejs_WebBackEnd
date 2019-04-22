const todos = module.require('./data');
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.setPrompt('명령하세요 : ');
rl.prompt();

rl.on('line', function(input) {
	if (input === 'exit') {
		rl.close();
	}

	const [command, ...condition] = input.split('$');
	if (command === 'show') {
		show(condition[0]);
	} else if (command === 'delete') {
		deleteTodo(condition[0]);
	}

	rl.prompt();
});
rl.on('close', function() {
	process.exit();
});

const makeTodoList = data => {
	return data.reduce((acc, cur) => {
		if (acc[cur.status] === undefined) {
			acc[cur.status] = [cur.name];
		} else {
			acc[cur.status].push(cur.name);
		}
		return acc;
	}, {});
};

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

const deleteTodo = id => {
	const deletedTodo = todos.filter(todo => todo.id !== Number(id));
	todoList = makeTodoList(deletedTodo);
};

let todoList = makeTodoList(todos);

// show('all');
// show('todo');
// show('doing');
// show('done');
