const yargs = require('yargs')

yargs.command({
    command:'add',
    describe:'Add a note',
    builder: {
        title : {
            describe:"Note title",
            demandOption:true,
            type:'string'
        },
        body : {
            describe:"body of add",
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Adding a note...' + argv.title)
        console.log('Adding a body...' + argv.body)
    }
})
yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log('Removing a note...')
    }
})

yargs.command({
    command:'list',
    describe:'list of variable',
    handler:function(){
        console.log("This is our list")    
    }
})

yargs.command({
    command:'read',
    describe:'It can read the data',
    handler: function(){
        console.log("This can read the data of powershell")
    }
})

yargs.parse()
// console.log(yargs.argv)








// const chalk = require('chalk')

// const msg = "Success!"
// console.log(chalk.green.bold(msg))

// const par = process.argv[2]
// console.log(par)









// const validator = require('validator')


// const getNotes = require('./notes.js')
// const msg = getNotes()
// console.log(msg)

// const id = 'Sunilpanchal123.sp@gmail.com'
// console.log(validator.isEmail(id))



// const name = getNotes(4,2)
// console.log(name)




// const fs = require('fs')
// fs.writeFileSync("notes.txt","This file is created by node js")
// fs.appendFileSync("notes.txt","This is updating the file using node js")