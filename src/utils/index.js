import _ from "lodash";

export function getOperation(operation) {
    switch (operation) {
        case 'difference':
            return '-'
        case 'division':
            return '/'
        case 'multiply':
            return '*'
        case 'sqrt':
            return '^'
        case 'sum':
            return '+'
    }
}

export function getRandomOperation(settings) {
    let operations = []
    _.forEach(settings, (item, key) => {
        if (item) operations.push(key)
    })
    let randomIndex = Math.floor(Math.random() * operations.length)
    return operations[randomIndex]
}