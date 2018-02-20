#!/usr/bin/env node
let linker = require('../lib/misc/linker/linker-dir')
let path = require('path')


let staticUpdate = function () {
  let projectRoot = path.join(__dirname, '../../')
  linker(projectRoot,
    '<!--- part of cowlog rewrite begin -->','<!--- part of cowlog rewrite end -->',
    'This document is part of the [Cowlog](https://github.com/vidaxl-com/cowlog) project. '
    )
  linker(projectRoot,
    '<!--- part of chat rewrite begin -->','<!--- part of chat rewrite end -->',
    `### Chat
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cowlog/Lobby)`
  )
  linker(projectRoot,
    '<!--- part of qa rewrite begin -->','<!--- part of qa rewrite end -->',
    `### QA
[![CircleCI](https://circleci.com/gh/vidaxl-com/cowlog/tree/master.svg?style=svg)](https://circleci.com/gh/vidaxl-com/cowlog/tree/master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d3fce811aecbe5c73ffb/test_coverage)](https://codeclimate.com/github/vidaxl-com/cowlog/test_coverage)
[![bitHound Overall Score](https://www.bithound.io/github/vidaxl-com/cowlog/badges/score.svg)](https://www.bithound.io/github/vidaxl-com/cowlog)
[![bitHound Dependencies](https://www.bithound.io/github/vidaxl-com/cowlog/badges/dependencies.svg)](https://www.bithound.io/github/vidaxl-com/cowlog/master/dependencies/npm)
[![Maintainability](https://api.codeclimate.com/v1/badges/d3fce811aecbe5c73ffb/maintainability)](https://codeclimate.com/github/vidaxl-com/cowlog/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/vidaxl-com/cowlog/badge.svg?targetFile=package.json)](https://snyk.io/test/github/vidaxl-com/cowlog?targetFile=package.json)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvidaxl-com%2Fcowlog.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvidaxl-com%2Fcowlog?ref=badge_shield)
[![Greenkeeper badge](https://badges.greenkeeper.io/vidaxl-com/cowlog.svg)](https://greenkeeper.io/)`
  )

}

staticUpdate()
