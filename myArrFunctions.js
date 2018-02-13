Array.prototype.MyMap = function(callback) {
    let newArr = []

    this.forEach(el => newArr.push(callback(el)))

    return newArr
}

Array.prototype.MyFilter = function(callback) {
    let newArr = []

    this.forEach(el => {
        if (callback(el))
            newArr.push(el)
    })

    return newArr
}

const x = [1, 2, 3, 4, 5]
const addTen = (n) => n + 10
const largerThanTwo = (n) => n > 2

const mappedArr = x.MyMap(addTen)
const filteredArr = x.MyFilter(largerThanTwo)
const origMap = x.map(addTen)
const origFilter = x.filter(largerThanTwo)

console.log(mappedArr, origMap, filteredArr, origFilter)
