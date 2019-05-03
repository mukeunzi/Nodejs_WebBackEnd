class ArrayParser {
	constructor(defaultResult = { type: '', child: [] }) {
		this.result = defaultResult;
	}

	lexer(str) {
		const strToken = str.split(' ');

		return strToken;
	}

	parser(strToken) {
		const delSignToken = [];

		if (strToken[0].includes('[') && strToken[strToken.length - 1].includes(']')) {
			const signRegExp = /^\[|\]$|\,/g;

			for (let str of strToken) {
				delSignToken.push(str.replace(signRegExp, ''));
			}

			this.result.type = 'array';
		}

		for (let token of delSignToken) {
			let childObj = {};
			if (!isNaN(token)) {
				token = Number(token);
			}
			childObj['type'] = typeof token;
			childObj['value'] = token;
			childObj['child'] = [];

			this.result.child.push(childObj);
		}
	}

	arrayParser(str) {
		const token = this.lexer(str);
		this.parser(token);
		return this.printResult();
	}

	printResult() {
		return this.result;
	}
}

const str = '[123, 22, 33]';
const myArrayParser = new ArrayParser();
const jsonStr = myArrayParser.arrayParser(str);
console.log(JSON.stringify(jsonStr, null, 2));
