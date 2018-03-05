#!/usr/bin/env node
let linker = require('../lib/misc/linker/linker-dir')
require('../index')()
let supportedFileTypes = require('../lib/misc/crawler/supported-file-types')
let path = require('path')
let projectRoot = path.join(__dirname, '../../')
// let crawlerData = require('../lib/misc/linker/crawler/crawler')(projectRoot)
let data = require('../lib/misc/crawler/rendering-engine')(projectRoot, function (newMetaData) {
  let serviceMap = newMetaData.data.serviceMap
  l(serviceMap)
  serviceMap.source.forEach(function (srcItem) {
    if (serviceMap.destination.includes(srcItem)) {
      Object.keys(supportedFileTypes).forEach(function (fileType) {
        let sourceTags = supportedFileTypes[fileType].tagsFactory(`source ${srcItem}`, fileType)
        let destinationTags = supportedFileTypes[fileType].tagsFactory(`destination ${srcItem}`, fileType)
        let sourceData = linker(projectRoot, sourceTags.begin, sourceTags.end)
        l(sourceData, sourceTags.begin, destinationTags.begin)('lasts')
        l(linker(projectRoot, destinationTags.begin, destinationTags.end, sourceData.data))
      })
    }
  })
})

l(data)
