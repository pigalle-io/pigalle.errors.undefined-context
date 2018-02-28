/**
 * This file is part of pigalle.errors.undefined-context
 *
 * Copyright (c) 2018 SAS 9 Février.
 *
 * Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 *
 */

/* eslint-env mocha */

require('should')

const {UndefinedContextError} = require('../lib/undefined-context-error')

describe('Class {UndefinedContextError}', () => {
  it('should be a function', () => {
    (UndefinedContextError).should.be.a.Function()
  })
})

describe('Create a instance of {UndefinedContextError} using <new> keyword', () => {
  it('should be an object', () => {
    (new UndefinedContextError()).should.be.an.Object()
  })

  it('should be an instance of {UndefinedContextError}', () => {
    (new UndefinedContextError()).should.be.an.instanceOf(UndefinedContextError)
  })
})

describe('Throw a new {UndefinedContextError}', () => {
  it('should throw an {Error}', () => {
    (() => { throw new UndefinedContextError() }).should.throw(Error)
  })

  it('should throw an {UndefinedContextError}', () => {
    (() => { throw new UndefinedContextError() }).should.throw(UndefinedContextError)
  })
})
