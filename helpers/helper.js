const fs = require('fs')

const getNewId = (array) => {
    if (array.length > 0) {
        return array[array.length - 1].id + 1
    } else {
        return 1
    }
}

function mustBeInArray(array, id) {
    return new Promise((resolve, reject) => {
        const row = array.find(r => r.id == id)
        if (!row) {
            reject({
                message: 'ID is not good',
                status: 404
            })
        }
        resolve(row)
    })
}

function findSurveysWithTitle(array, title) {
    return new Promise((resolve, reject) => {
        const row = array.filter(r => r.title == title)
        if (!row) {
            reject({
                message: "Title is no good",
                status: 404
            })
        }
        resolve(row)
    })
}

function makeAverageSurveysWithTitle(array, title) {
    return new Promise((resolve, reject) => {
        const row = array.filter(r => r.title == title)
        if (!row) {
            reject({
                message: "Title is no good",
                status: 404
            })
        }
        let len = row.length
        let average = 0
        var i = 0

        while(i < len) {
            average = average + row[i].note
            i++
        }

        average = average / len
        resolve(average)
    })
}

function writeJSONFile(filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err) => {
        if (err) {
            console.log(err)
        }
    })
}

module.exports = {
    getNewId,
    mustBeInArray,
    findSurveysWithTitle,
    makeAverageSurveysWithTitle,
    writeJSONFile
}