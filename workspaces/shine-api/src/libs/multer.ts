import multer from 'multer'
import crypto from 'node:crypto'
import fs from 'node:fs'
import path from 'node:path'

const tmpFolder = path.resolve(__dirname, '..', 'tmp')

if(!fs.existsSync(tmpFolder)) {
	fs.mkdirSync(tmpFolder)
}

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, tmpFolder)
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