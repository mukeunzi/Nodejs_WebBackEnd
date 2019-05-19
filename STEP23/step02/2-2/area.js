const PI = Math.PI;
const stackList = [];

function circle(r = -1) {
	checkParameter(r);

	return Math.pow(r, 2) * PI;
}

function circleSum(r = -1) {
	let areaSum = 0;
	checkParameter(r);

	for (let i = 1; i <= r; i++) {
		areaSum += circle(i);
	}

	return areaSum;
}

function rect(a = -1, b = -1) {
	checkParameter(a, b);
	return a * b;
}

function trapezoid(a = -1, b = -1, h = -1) {
	checkParameter(a, b, h);
	return ((a + b) * h) / 2;
}

function checkParamCount(param) {
	for (let i = 0; i < param.length; i++) {
		if (param[i] === -1) {
			throw Error('모든 인자를 입력하세요.');
		}
	}
}

function checkParamType(param) {
	for (let i = 0; i < param.length; i++) {
		if (typeof param[i] !== 'number') {
			throw Error('숫자를 입력하세요.');
		}
	}
}

function checkParameter(...param) {
	checkParamCount(param);
	checkParamType(param);
}

module.exports.printExecutionSequence = function() {
	let result = stackList.join(', ');
	return result;
};

module.exports.getArea = function(...param) {
	if (param[0] === 'circle') {
		stackList.push('circle');
		if (param.length >= 3) {
			return circleSum(param[2]);
		} else {
			return circle(param[1]);
		}
	} else if (param[0] === 'rect') {
		stackList.push('rect');
		return rect(param[1], param[2]);
	} else if (param[0] === 'trapezoid') {
		stackList.push('trapezoid');
		return trapezoid(param[1], param[2], param[3]);
	} else {
		throw Error('함수를 다시입력하세요.');
	}
};
