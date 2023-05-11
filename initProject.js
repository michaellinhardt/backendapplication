import * as fileHelper from './helpers/file.helper.js'
import path from 'path'

export const ProjectInitializer = new (class {
	constructor () {
		this.createProjectFolderKnexWhenMissing()
	}

	createProjectFolderKnexWhenMissing () {
		const targetPath = path.resolve(__dirname, '../')
		console.info('installing knex folder')
		const sourcePath = path.resolve(__dirname, './projectFiles/')
		fileHelper.copyDirSync(sourcePath, targetPath)
	}
})()
