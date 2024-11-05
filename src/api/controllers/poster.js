const Poster = require('../models/poster')
const { deleteFile } = require('../../utils/deleteFile')

// Create a new poster, method to handle the image upload
exports.createPoster = async (req, res, next) => {
  try {
    const posterData = { ...req.body }

    // Check if the file was uploaded and assign the Cloudinary URL
    if (req.file) {
      posterData.image = req.file.path // This path is the Cloudinary URL
    }

    const poster = new Poster(posterData)
    await poster.save()
    res.status(201).json(poster)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Get all posters
exports.getAllPosters = async (req, res, next) => {
  try {
    const posters = await Poster.find(req.query).populate('artist')
    res.json(posters)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Get a specific poster by ID
exports.getPosterById = async (req, res, next) => {
  try {
    const poster = await Poster.findById(req.params.id).populate('artist')
    if (!poster) return res.status(404).json({ message: 'Poster not found' })
    res.json(poster)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// Update a poster by ID
exports.updatePoster = async (req, res, next) => {
  try {
    const poster = await Poster.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    if (!poster) return res.status(404).json({ message: 'Poster not found' })
    res.json(poster)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

// Delete a poster by ID
exports.deletePoster = async (req, res, next) => {
  try {
    const poster = await Poster.findByIdAndDelete(req.params.id)
    if (!poster) return res.status(404).json({ message: 'Poster not found' })

    // Call deleteFile with the Cloudinary URL
    if (poster.image) {
      await deleteFile(poster.image)
    }

    res.json({ message: 'Poster deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
