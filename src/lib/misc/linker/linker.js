const sstlm = require('./substing-to-line-mapper')
const clone = require('clone')
const objectPath = require('object-path')

module.exports = exports = function (inputString, beginning, closing, newValue = null) {
  let templateBeginningArray = sstlm(inputString, beginning).reverse()
  let templateEndArray = sstlm(inputString, closing).reverse()

  objectPath.set(module, 'meta.changed', {
    all: false,
    withoutWhiteSpaces: false,
    status: 'read'
  })

  if (templateBeginningArray.length !== templateEndArray.length) {
    throw String(`The number linker closing tags and starting tags are not matching`)
  }
  let returnData = clone(inputString.split('\n'))
  if (newValue) {
    templateBeginningArray.forEach(function (templateBeginning, index) {
      let templateEnd = templateEndArray[index]
      if (templateBeginning >= 0 && templateEnd && templateBeginning < templateEnd) {
        if (newValue) {
          returnData = returnData.slice(0, templateBeginning + 1)
            .concat(newValue.split('\n')
              .concat(returnData.slice(templateEnd, returnData.length)))
          module.meta.changed.all = true
          module.meta.changed.status = 'write'
        }
      }
    })

    if (module.clearWhitespace(returnData.join('\n')) !==
      module.clearWhitespace(inputString)) {
      module.meta.changed.withoutWhiteSpaces = true
    }

    return module.makeReturnObject(returnData)
  }

  if (!newValue) {
    let resultAltered = false
    templateBeginningArray.forEach(function (templateBeginning, index) {
      let templateEnd = templateEndArray[index]
      if (!resultAltered) {
        returnData = returnData.slice(templateBeginning + 1, templateEnd)
        resultAltered = true
      }
    })

    // return returnData.join('\n')
    if (resultAltered) {
      return module.makeReturnObject(returnData)
    }

    if (!resultAltered) {
      return module.makeReturnObject([''])
    }
  }

  return module.makeReturnObject([''])
}

module.backToSting = function (array) {
  return array.join('\n')
}

module.makeReturnObject = function (returnData) {
  returnData = returnData.join('\n')
  let meta = module.buildMeta()

  return {returnData, meta}
}

module.buildMeta = function () {
  let meta = module.meta
  delete module.meta

  return meta
}

module.clearWhitespace = require('./clear-whitespace')
