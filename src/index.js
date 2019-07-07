const fs = require('fs')
const parser = require('xml2json')

if (process.argv.length <= 2) {
    console.log("Usage: " + __filename + " /path/to/macroFile.xml")
    process.exit(-1)
}

var macroFile = process.argv[2]


fs.readFile(macroFile, (err, data) => {
    let json = JSON.parse(parser.toJson(data))
    json.PortalAutoTextExport.AutoText.forEach(({OwnerFirstName, OwnerLastName, Name, ContentRTF, ContentText}) => {
        let outFileName = `./out/${OwnerFirstName}_${OwnerLastName}_${Name.replace(/[/\s]/g, '_')}`
        fs.writeFileSync(outFileName + '.rtf', ContentRTF)
        fs.writeFileSync(outFileName + '.txt', ContentText)
    })
})
