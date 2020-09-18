const filterDir = require('./mymodule')

const dirName = process.argv[2]
const ext = process.argv[3]

filterDir(dirName, ext, (err, data)=> {
    if(err) { console.log('An error occurred')}

    data.map( (item)=> {
        console.log(item)
    })
})