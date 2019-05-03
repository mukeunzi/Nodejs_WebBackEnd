class ArrayParser {
	constructor(defaultResult = { type: '', child: [] }) {
		this.result = defaultResult;
	}

	lexer(str) {
		const strToken = str.split(' ');

		return strToken;
	}
}

const str = '[123, 22, 33]';
// const myArrayParser = new ArrayParser();
// const jsonStr = myArrayParser.arrayParser(str);
// console.log(JSON.stringify(jsonStr, null, 2));
