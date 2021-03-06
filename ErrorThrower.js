'use strict'

class ErrorThrower {
	/**
	 * Class to Throw Errors
	 * @param  {Object} Error Conf
	 * @param  {String} Policy Name
	 */
	constructor(opt) {
		this.err = opt.err
	}

	throw() {
		// Log the error Here
		return { "name": `${this.err.emitter}Error`, "error" : this.err }
	}
}

module.exports = ErrorThrower
