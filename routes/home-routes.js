const express =require('express')
const {homeView, generatePdf} = require('../controllers/homeControllers')

const router = express.Router()

router.get('/', homeView)
router.get('/download', generatePdf)

module.exports = {
  routes: router
}