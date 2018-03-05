

<!--- source qa rewrite begin -->
### QA
[![CircleCI](https://circleci.com/gh/vidaxl-com/cowlog/tree/master.svg?style=svg)](https://circleci.com/gh/vidaxl-com/cowlog/tree/master)
[![Test Coverage](https://api.codeclimate.com/v1/badges/d3fce811aecbe5c73ffb/test_coverage)](https://codeclimate.com/github/vidaxl-com/cowlog/test_coverage)
[![bitHound Overall Score](https://www.bithound.io/github/vidaxl-com/cowlog/badges/score.svg)](https://www.bithound.io/github/vidaxl-com/cowlog)
[![bitHound Dependencies](https://www.bithound.io/github/vidaxl-com/cowlog/badges/dependencies.svg)](https://www.bithound.io/github/vidaxl-com/cowlog/master/dependencies/npm)
[![Maintainability](https://api.codeclimate.com/v1/badges/d3fce811aecbe5c73ffb/maintainability)](https://codeclimate.com/github/vidaxl-com/cowlog/maintainability)
[![Known Vulnerabilities](https://snyk.io/test/github/vidaxl-com/cowlog/badge.svg?targetFile=package.json)](https://snyk.io/test/github/vidaxl-com/cowlog?targetFile=package.json)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fvidaxl-com%2Fcowlog.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fvidaxl-com%2Fcowlog?ref=badge_shield)
[![Greenkeeper badge](https://badges.greenkeeper.io/vidaxl-com/cowlog.svg)](https://greenkeeper.io/)
<!--- source qa rewrite end -->

<!--- source chat rewrite begin -->
### Chat
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/cowlog/Lobby)
<!--- source chat rewrite end -->
# Cowlog

Cowlog is made for developers by the vidaxl.com, helping them to debug their
application. It is a library that helps you identify your debug message quickly
on the console output. The project is meant to be used solely in a
**nodejs environment** as these days browsers provide really neat standard toolsets for debugging your
applications.

We want cowlog to be usable in any circumstances without problems therfore we
have 100% code coverage.

Cowlog is not meant to be included in any production code, as it might create
performance issues. However, the tool provides the ability to see where it is
being used in your code, so it can safely and easily removed (see the first
example).

## Why use it?

- Server side applications tend to pollute the console still sometimes you want
to use console.log, and not solely use the amazing debug mode [--inspect](https://nodejs.org/en/docs/inspector/)
of the node.js.

- CowLog can help you refactoring your code faster. it runs on every node.js
environment >= 4.0.0

## Installation
```bash
npm install cowlog --save-dev
```

## Usage
For [more documentation click here](documentation/logging_functionality.md) this
document will leverage the power of the logging capabilities of this library.

<!--- example begin -->
### That's the way you like it
You will see all information with cowlog, no need to have 
specially trained eye for development log messages, or special identifiable 
strings, before and after you want to see. 

- **session log**: Every time cowlog is called, the result is logged in a 
separate file. That way, all the logs can be found through the path displayed 
and get inspected even when the code is running in real time.

- **called from**: It is the exact place where you placed cowlog, so you can 
remove it with ease, after you have inspected the variables in the 
runtime.

The "stack trace" will help you, it sticks with cowlog.
     
### Default logging

```javascript

const cowlog = require('cowlog')()
cowlog.log('abcz, 1337, 1.23');

```


```
 ____________________________________________________________________________________________________________________
(                                                                                                                    )
( 0 Beginnig -------                                                                                                 )
( "abcz"                                                                                                             )
( 0 End -------                                                                                                      )
(                                                                                                                    )
( 1 Beginnig -------                                                                                                 )
( 1337                                                                                                               )
( 1 End -------                                                                                                      )
(                                                                                                                    )
( 2 Beginnig -------                                                                                                 )
( 1.23                                                                                                               )
( 2 End -------                                                                                                      )
(                                                                                                                    )
( _-_-_-_-_-_-_-_-_-_-_-_                                                                                            )
(                                                                                                                    )
( called from:/home/tothi/dev/cowlog/test-build/lib/test-runner.js:26:36                                             )
( stack trace:/tmp/cowlog/hashes/d5/3675613764e4bd4ad985443dee55faf73565df3e286c965ce21c8d240b05d9_stack-trace.log   )
( session log:/tmp/cowlog/hashes/16/5ae023114de0a0af899e7daa227cb938f1c59bbc8e4f74f4378b1a0be19889_session.log       )
( logged at:2018-02-23T15:45:51.239Z                                                                                 )
 --------------------------------------------------------------------------------------------------------------------
   o         ,        ,
    o       /(        )`
     o      \ \___   / |
            /- _  `-/  '
           (/\/ \ \   /\
           / /   | `    \
           O O   ) /    |
           `-^--'`<     '
          (_.)  _  )   /
           `.___/`    /
             `-----' /
<----.     __ / __   \
<----|====O)))==) \) /====
<----'    `--' `.__,' \
             |        |
              \       /
        ______( (_  / \______
      ,'  ,-----'   |        \
      `--{__________)        \/

```

<!--- example end -->

### Remarks

If you don't have a golbal variable registered to l (cowlog.log) or lf
(cowlog.lf) than cowlog will register them, so you can reach it from anywhere.
I know it is against all good practice, but don't forget cowlog is used in
developmnet time only.

<!--- source qa rewrite begin -->
This document is part of the [Cowlog](https://github.com/vidaxl-com/cowlog) project. 
<!--- source qa rewrite end -->
