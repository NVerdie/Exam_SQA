const express = require('express')
const router = express.Router()

router.use('/api/question', require('./post.routes'))

router.use('/api/surveys', require('./survey.routes'))

module.exports = router