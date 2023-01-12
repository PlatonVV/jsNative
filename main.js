let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getStNames = (array) => {
    const result = []
    const getName = item => item.name
    for (let i = 0; i < array.length; i++) {
        result[i] = getName(array[i])
    }
    return result
}
console.log(getStNames(students))

const getScores = (array) => {
    const result = []
    const getScores = item => item.scores
    for (let i = 0; i < array.length; i++) {
        result[i] = getScores(array[i])
    }
    return result
}

const getNewArray = (array, func) => {
    const result = []
}

const addProps = item => {
    item.isStudent = true
    return item
}
const itPush = (array, el) => {
    array[array.length] = el
    return array.length
}

const itFilter = (array, func) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]) === true) {
            itPush(array, array[i])
        }
    }
    return result
}

const itIncludes = (array, value) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true
        }

    }
    return false
}
const itUnShift = (array, item) => {
    let temp = undefined
    for (let i = array.length - 1; i >= 0; i--) {
        array[i + 1] = array[i]
    }
    array[0] = item
    return array.length
}

const nums = [1, 2, 3, 4, 5]

const numFilter = nums.map(el => el ** 2)
    .filter(el => el > 10)
    .reverse()

console.log(numFilter)