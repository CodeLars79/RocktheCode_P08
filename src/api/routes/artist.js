const express = require('express')
const artistRoutes = express.Router()
const {
  createArtist,
  getAllArtists,
  getArtistById,
  updateArtist,
  deleteArtist
} = require('../controllers/artist')
const upload = require('../../middlewares/file')

artistRoutes.post('/', upload.single('img'), createArtist)
artistRoutes.get('/', getAllArtists)
artistRoutes.get('/:id', getArtistById)
artistRoutes.put('/:id', updateArtist)
artistRoutes.delete('/:id', deleteArtist)

module.exports = artistRoutes
