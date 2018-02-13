const { xd, add, addTwice, xdFunc, niceFunc } = require('./test.js')

console.log('testtwo')

console.log(
	xd(25), 
	add(5, 10), 
	addTwice(5, 10), 
	xdFunc('Hello'), 
	niceFunc(5, xdFunc)
)

