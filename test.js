console.log('test')

module.exports.abc = (n) => { 
	n /= n
	return n += 15
}

module.exports.xdFunc = n => n + 'xD'

module.exports.niceFunc = (a, func) => `Hello ${a} ${func(a)}`

module.exports.add = (a, b) => a + b
module.exports.addTwice = (a, b) => module.exports.add(a, b) + module.exports.add(a, b)

module.exports.xd = n => { 
	if (n == 0) return

	n += 5
	n /= 10

	return `${n} xD`
}
