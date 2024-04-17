import multer from 'multer'
import crypto from 'node:crypto'
import fs from 'node:fs'
import tmpFolderPath from '../constants/tmpFolderPath'

if(!fs.existsSync(tmpFolderPath)) {
	fs.mkdirSync(tmpFolderPath)
}

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, tmpFolderPath)
	},
	filename: (req, file, cb) => {
		const fileName = `${crypto.randomUUID()}-${file.originalname}`
		cb(null, fileName)
	}
})

const multerInstance = multer({
	storage
})

export default multerInstance