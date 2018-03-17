/* eslint-env mocha */
const path = require('path')[![Maintainability](https://api.codeclimate.com/v1/badges/d3fce811aecbe5c73ffb/maintainability)](https://codeclimate.com/github/vidaxl-com/cowlog/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/vidaxl-com/cowlog/badge.svg?targetFile=package.json)](https://snyk.io/test/github/vidaxl-com/cowlog?targetFile=package.json)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvidaxl-com%2Fcowlog.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvidaxl-com%2Fcowlog?ref=badge_shield)
[![Greenkeeper badge](https://badges.greenkeeper.io/vidaxl-com/cowlog.svg)](https://greenkeeper.io/)
<!--- source qa rewrite end -->

const cwd = require('pkg-dir').sync(__dirname)
const fixturesRoot = path.join(cwd, 'tests/directory-fixtures')
const fixtureDirectoryProvider = require('directory-fixture-provider')(fixturesRoot)
require('chai').should()
const docCrawler = require('../../../../../src/lib/juggler/doc-crawler/doc-crawler')
const directoryLinker = require('../../../../../src/lib/juggler/linker/linker-dir')
const expect = require('chai').expect

describe('Testing', function () {
  describe('@doc-crawler', function () {
    it('modify', function () {
      [
        {
          se: '<!--- source qa rewrite end -->',
          sb: '<!--- source qa rewrite begin -->',
          de: '<!--- destination qa rewrite end -->',
          db: '<!--- destination qa rewrite begin -->',
        },
        {
          se: '<!--- source part of cowlog end -->',
          sb: '<!--- source part of cowlog begin -->',
          de: '<!--- destination part of cowlog end -->',
          db: '<!--- destination part of cowlog begin -->',
        },
        {
          sb: '<!--- source qa rewrite begin -->',
          se: '<!--- source qa rewrite end -->',
          de: '<!--- destination qa rewrite end -->',
          db: '<!--- destination qa rewrite begin -->',
        }
      ].forEach(function (data) {
        let fixtureData = fixtureDirectoryProvider.get('crawler/empty-destinations')
        let sourceQa = directoryLinker(fixtureData.dir, data.sb, data.se)
        let destinationQa = directoryLinker(fixtureData.dir, data.db, data.de)
        destinationQa.should.to.equal('')
        expect(fixtureData.getStatus().changed).to.equal(false)
        docCrawler(fixtureData.dir)
        expect(fixtureData.getStatus().changed).to.equal(true)
        let destinationQa2 = directoryLinker(fixtureData.dir, data.db, data.de)
        destinationQa2.should.to.equal(sourceQa)
      })
    })

    it('modify empty lines', function () {
      let baseFolder = 'crawler/empty-lines-destinations'
      let fixtureData = fixtureDirectoryProvider.get(baseFolder)
      docCrawler(fixtureData.dir)
      // l(fixtureData.getStatus().contents)
      expect(fixtureData.getStatus().changed).to.equal(true)
    })

    it('modify source malformed', function () {
      let baseFolder = 'crawler/malformed'
      let folders = [
        {
          number: 1,
          changed: false
        },
        {
          number: 2,
          changed: false
        }
      ]
      folders.forEach(function (data) {
        let fixtureDirectory = path.join(baseFolder, `${data.number}`)
        let fixtureData = fixtureDirectoryProvider.get(fixtureDirectory)
        docCrawler(fixtureData.dir)
        // l(fixtureData.status())
        expect(fixtureData.getStatus().changed).to.equal(data.changed, `malformed files ${data.number}`)
      })
    })

    it('similar path destinations', function () {
      let baseFolder = 'crawler/similar-path-destinations'

        let fixtureDirectory = baseFolder
        let fixtureData = fixtureDirectoryProvider.get(fixtureDirectory)
        docCrawler(fixtureData.dir)
        expect(fixtureData.getStatus().changed).to.equal(false)
    })

    it('Javascript comments', function () {
      let baseFolder = 'crawler/javascript'

      let fixtureDirectory = baseFolder
      let fixtureData = fixtureDirectoryProvider.get(fixtureDirectory)
      docCrawler(fixtureData.dir)
      // expect(fixtureData.getStatus().changed).to.equal(false)
    })
  })
})
