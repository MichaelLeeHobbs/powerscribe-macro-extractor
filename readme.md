# Powerscribe Macro Extractor
## Requirements
### Windows
* Nodejs - `choco install nodejs`
* Yarn - `choco install yarn`
* Windows Build Tools - `yarn global add windows-build-tools`
### Linux
* Nodejs - `https://nodejs.org/en/download/`
* Yarn - `https://yarnpkg.com/lang/en/docs/install/`
## Install
* `git clone https://github.com/MichaelLeeHobbs/powerscribe-macro-extractor.git`
* `cd powerscribe-macro-extractor`
* `yarn install`
## Usage
* `yarn extract /path/to/macroFile.xml`
* Windows example: `yarn extract "C:\Users\Doc Vader\Documents\DocVader.xml"`
* Linux example: `yarn extract "~\documents\DocVader.xml"`
* After running extract check the `./out` folder for results.
