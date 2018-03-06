let linker = require('../../../lib/misc/linker/linker-dir')
let supportedFileTypes = require('../../misc/crawler/supported-file-types')

module.exports = exports = function (projectRoot) {
  return require('../../../lib/misc/crawler/rendering-engine')(projectRoot, function (newMetaData) {
    let serviceMap = newMetaData.data.serviceMap
    serviceMap.source.forEach(function (srcItem) {

      if (serviceMap.destination.includes(srcItem)) {
        Object.keys(supportedFileTypes).forEach(function (fileType) {
          let sourceTags = supportedFileTypes[fileType].tagsFactory(`source ${srcItem}`, fileType)
          let destinationTags = supportedFileTypes[fileType].tagsFactory(`destination ${srcItem}`, fileType)
          let sourceData = linker(projectRoot, sourceTags.begin, sourceTags.end)
          linker(projectRoot, destinationTags.begin, destinationTags.end, sourceData)
        })
      }
    })
  })
}

