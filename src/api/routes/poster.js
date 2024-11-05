const express = require('express')
const posterRoutes = express.Router()
const {
  createPoster,
  getAllPosters,
  getPosterById,
  updatePoster,
  deletePoster
} = require('../controllers/poster')
const upload = require('../../middlewares/file')

posterRoutes.post('/', upload.single('img'), createPoster)
posterRoutes.get('/', getAllPosters)
posterRoutes.get('/:id', getPosterById)
posterRoutes.put('/:id', updatePoster)
posterRoutes.delete('/:id', deletePoster)

module.exports = posterRoutes
