import * as appHelpers from '../../helpers'
import * as h from '../../mocha/helpers'

h.tools.printCurrentTestFile(__filename)

const { code } = appHelpers

describe('Testing code helper', () => {

	it('Sleep 100 ms', async () => {
		const start = Date.now()
		await code.sleep(105)
		h.expect(Date.now() - start).to.be.above(99)
	})
})
