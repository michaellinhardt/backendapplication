import fs from 'fs'
import path from 'path'

export const

	isFolderOrFile = path =>
		fs.existsSync(path),

	mkdir = path =>
		!isFolderOrFile(path)
			? fs.mkdirSync(path, { recursive: true })
			: false,

	duplicateFile = (originalFilePath, copyFilePath) =>
		!isFolderOrFile(copyFilePath)
			? (function () {
				fs.copyFileSync(originalFilePath, copyFilePath)
				console.info('copying', originalFilePath)
			}())
			: false,

	copyDirSync = (src, dest) => {
		const entries = fs.readdirSync(src, { withFileTypes: true })

		// Ensure the destination directory exists
		mkdir(dest)

		for (const entry of entries) {
			const srcPath = path.join(src, entry.name)
			const destPath = path.join(dest, entry.name)

			// eslint-disable-next-line no-unused-expressions
			entry.isDirectory()
				? copyDirSync(srcPath, destPath)
				: duplicateFile(srcPath, destPath)
		}
	},

	syncGetFile = path =>
		fs.readFileSync(path, 'utf8')
