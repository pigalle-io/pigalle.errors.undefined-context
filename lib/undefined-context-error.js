/**
 * This file is part of pigalle.errors.undefined-context
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/**
 * @module undefined-context-error
 * @description An exception to throw when the Pigalle context is missing.
 * @example
 *
 * const {UndefinedContextError} = require('@pigalle/errors.undefined-context')
 *
 * if (!context) {
 *   throw UndefinedContextError.factory()
 * }
 *
 */

const {ErrorBase} = require('@pigalle/core.base.error')

/**
 * Exception class to raise when missing Pigalle context.
 *
 * @class
 * @public
 */
class UndefinedContextError extends ErrorBase {
  /**
   * Create a new instance of {UndefinedContextError}
   *
   * @param args
   * @constructor
   * @public
   */
  constructor (...args) {
    super('Undefined context', ...args)
  }
}

module.exports = {}
module.exports.UndefinedContextError = UndefinedContextError
