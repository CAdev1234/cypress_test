# StepUI Cypress Test
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

[Cypress](https://cypress.io) is JavaScript End to End Testing Framework.
Fast, easy and reliable testing for anything that runs in a browser.

## Features
- Login using other user account
- Search non-existent Supplier Group by code
- Search non-existent Supplier Group by number
- Search non-existent Supplier Group by name
- Search Supplier Group by code
- Search Supplier Group by name
- Search Supplier Group by name list
- Search Supplier Group by number
- Supplier Group Assigning Workflow
- Supplier Group Reassigning Workflow
- Supplier Group Export
- Supplier Group Maintenance
- Supplier Unchanging Workflow since search

## System requirements
### Operating System

Cypress is a desktop application that is installed on your computer. The desktop application supports these operating systems:
- macOS 10.9 and above (64-bit only)
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- Windows 7 and above

### Node.js
If you are using npm to install Cypress, we support:
 - Node.js 12 or 14 and above

### Linux
If you are using Linux, you'll want to have the required dependencies installed on your system.
##### Ubuntu/Debian
```sh
apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
```
##### CentOS
```sh
yum install -y xorg-x11-server-Xvfb gtk2-devel gtk3-devel libnotify-devel GConf2 nss libXScrnSaver alsa-lib
```
##### Docker
Docker images with all of the required dependencies installed are available under [cypress/base](https://github.com/cypress-io/cypress-docker-images)
## Installation

Cypress Test Framework requires [Node.js](https://nodejs.org/) v10+ to run.

Install Cypress via [npm]():
```sh
cd /your/project/path
npm install cypress --save -dev
```
This will install Cypress locally as a dev dependency for your project.

Install Cypress via [yarn]():
```sh
cd /your/project/path
yarn add cypress --dev
```

## Opening Cypress
If you used [npm]() to install, Cypress has now been installed to your [./node_modules]() directory, with its binary executable accessible from [./node_modules/.bin.]()
```sh
npm run e2e
```
or
```sh
./node_modules/.bin/cypress open
```
or
```sh
npx cypress open
```
or
```sh
yarn run cypress open
```


## License

MIT
