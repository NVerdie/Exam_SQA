let posts = require('../data/posts.json')
const filename = './data/posts.json'
const helper = require('../helpers/helper.js')

/* return all surveys */
function getAllSurveys() {
    return new Promise((resolve, reject) => {
        if (posts.length === 0) {
            reject({
                message: 'no surveys available',
                status: 202
            })
        }

        resolve(posts)
    })
}

/* return all question in specific survey */
function getSurveys(title) {
    return new Promise((resolve, reject) => {
        helper.findSurveysWithTitle(posts, title)
        .then(post => resolve(post))
        .catch(err => reject(err))
    })
}

/* return average note of a survey */
function getAverageSurveys(title) {
    return new Promise((resolve, reject) => {
        helper.makeAverageSurveysWithTitle(posts, title)
        .then(post => resolve(post))
        .catch(err => reject(err))
    })
}

module.exports = {
    getAllSurveys,
    getSurveys,
    getAverageSurveys
}