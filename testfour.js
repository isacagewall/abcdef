const str = "0.25*({Total}-{Moms}-{Frakt})"
const total = 100
const moms = 25
const frakt = 10

String.prototype.replaceAll = function(search, replacement) {
	return this.replace(new RegExp(search, 'g'), replacement)
}

let newStr = str.replaceAll('{Total}', total).replaceAll('{Moms}', moms).replaceAll('{Frakt}', frakt)

console.log(eval(newStr))
