const express = require('express')
const router = express.Router()
const post = require('../models/surveys.model')
const m = require('../helpers/middlewares')

/* All surveys */
router.get('/', async (req, res) => {
    await post.getAllSurveys()
    .then(posts => res.json(posts))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* A survey list by title */
router.get('/:title', async (req, res) => {
    const title = req.params.title

    await post.getSurveys(title)
    .then(post => res.json(post))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

/* return average of surveys */
router.get('/average/:title', async (req, res) => {
    const title = req.params.title

    await post.getAverageSurveys(title)
    .then(post => res.json(post))
    .catch(err => {
        if (err.status) {
            res.status(err.status).json({ message: err.message })
        } else {
            res.status(500).json({ message: err.message })
        }
    })
})

module.exports = router