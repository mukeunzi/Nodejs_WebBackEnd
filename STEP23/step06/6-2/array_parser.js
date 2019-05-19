const msgObj = module.require('./error_message');

class ArrayParser {
	constructor() {
		this.parserStack = [];
		this.quoteArr = ["'", '"'];
		this.bracketArr = ['[', ']'];
		this.separatorArr = [',', ' '];
	}

	tokenizer(inputStr) {
		const quoteStack = [];
		const tokenArr = [];
		let token = '';
		let doubleQuotes = false;

		for (let char of inputStr) {
			if (!quoteStack.length) {
				token = this.makeVariousTypeToken(char, token, tokenArr, quoteStack);
			} else {
				let returnObj = this.makeStringTypeToken(char, token, tokenArr, quoteStack, doubleQuotes);
				token = returnObj.token;
				doubleQuotes = returnObj.doubleQuotes;
			}
		}

		return tokenArr;
	}

	lexer(tokens) {
		const lexerArr = [];

		for (let token of tokens) {
			if (!this.isSeparator(token)) {
				this.makeLexerData(lexerArr, token);
			}
		}

		return lexerArr;
	}

	parser(lexerArr) {
		const parserArr = [];

		while (lexerArr.length) {
			const lexeredData = lexerArr.shift();

			if (this.isOpenBracket(lexeredData.type)) {
				this.startMakeArray(parserArr, lexerArr);
			} else if (this.isCloseBracket(lexeredData.type)) {
				if (this.isValidBracket(this.parserStack.length)) {
					return this.finishMakeArray(parserArr);
				}
				throw new Error(`${msgObj.INVALID_BRACKET}`);
			} else {
				this.makeParser(parserArr, lexeredData);
			}
		}

		return parserArr;
	}

	arrayParser(inputStr) {
		try {
			console.log(JSON.stringify(this.parser(this.lexer(this.tokenizer(inputStr))), null, 2));
		} catch (error) {
			console.log(error.message);
		}
	}

	getTypeAndValue(token) {
		if (!isNaN(token)) {
			return { type: 'number', value: Number(token) };
		}
		if (token === '[') {
			return { type: 'openBracket', value: token };
		}
		if (token === ']') {
			return { type: 'closeBracket', value: token };
		}
		if (token.includes('"') || token.includes("'")) {
			if (this.isValidString(token)) {
				return { type: 'string', value: token };
			}
			throw new Error(`${token}${msgObj.INVALID_STRING}`);
		}

		const lowerStrToken = token.toLowerCase();
		if (lowerStrToken === 'true') {
			return { type: 'boolean', value: token };
		}
		if (lowerStrToken === 'false') {
			return { type: 'boolean', value: token };
		}
		if (lowerStrToken === 'null') {
			return { type: 'null', value: token };
		}
		throw new Error(`${token}${msgObj.INVALID_TYPE}`);
	}

	isValidString(token) {
		const tokenArr = [...token];
		const filteredQuotes = tokenArr.filter(char => this.isQuote(char));

		if (filteredQuotes.length !== 2) return false;
		if (!(this.isQuote(token[0]) && this.isQuote(token[token.length - 1]))) return false;
		return true;
	}

	isBracket(char) {
		return this.bracketArr.includes(char);
	}

	isSeparator(char) {
		return this.separatorArr.includes(char);
	}

	isQuote(char) {
		return this.quoteArr.includes(char);
	}

	pushAndResetToken(tokenArr, token) {
		if (token !== '') {
			tokenArr.push(token);
			token = '';
		}
		return token;
	}

	pushAndPopToken(tokenArr, char, token, quoteStack) {
		tokenArr.push(token);
		tokenArr.push(char);
		token = '';
		quoteStack.pop();

		return token;
	}

	isClosingToken(char, doubleQuotes) {
		return (this.isSeparator(char) || this.isBracket(char)) && doubleQuotes;
	}

	makeLexerData(lexerArr, token) {
		lexerArr.push(this.getTypeAndValue(token));
	}

	isOpenBracket(dataType) {
		return dataType === 'openBracket';
	}

	isCloseBracket(dataType) {
		return dataType === 'closeBracket';
	}

	startMakeArray(parserArr, lexerArr) {
		this.parserStack.push('[');
		parserArr.push({ type: 'array', child: this.parser(lexerArr) });
	}

	isValidBracket() {
		return this.parserStack.length;
	}

	finishMakeArray(parserArr) {
		this.parserStack.pop();
		return parserArr;
	}

	makeParser(parserArr, lexeredData) {
		if (this.parserStack.length) {
			parserArr.push(lexeredData);
		} else {
			throw new Error(`${msgObj.INVALID_BRACKET}`);
		}
	}

	makeVariousTypeToken(char, token, tokenArr, quoteStack) {
		if (this.isBracket(char) || this.isSeparator(char)) {
			token = this.pushAndResetToken(tokenArr, token);
			tokenArr.push(char);
		} else if (this.isQuote(char)) {
			token += char;
			quoteStack.push(char);
		} else {
			token += char;
		}

		return token;
	}

	makeStringTypeToken(char, token, tokenArr, quoteStack, doubleQuotes) {
		if (this.isQuote(char)) {
			token += char;
			doubleQuotes = true;
		} else if (this.isClosingToken(char, doubleQuotes)) {
			token = this.pushAndPopToken(tokenArr, char, token, quoteStack);
			doubleQuotes = false;
		} else {
			token += char;
			doubleQuotes = false;
		}

		return { token, doubleQuotes };
	}
}

const inputStr = '[1, true, "ab,c", ["4b", 55]]';
const myArrayParser = new ArrayParser();
myArrayParser.arrayParser(inputStr);
