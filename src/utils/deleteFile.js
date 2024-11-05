const cloudinary = require('cloudinary').v2

const deleteFile = async (url) => {
  try {
    const imgSplited = url.split('/')
    const folderName = imgSplited.at(-2)
    const fileName = imgSplited.at(-1).split('.')[0]

    const result = await cloudinary.uploader.destroy(
      `${folderName}/${fileName}`
    )
    console.log('File deleted!', result)
  } catch (error) {
    console.error('Error deleting file from Cloudinary:', error)
  }
}

module.exports = { deleteFile }
