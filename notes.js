const fs = require('fs')
const chalk = require('chalk')

const addNote =(title, body)=>{
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNotes = notes.find((note)=> note.title === title)

    if(!duplicateNotes)
    {
        notes.push({
            title: title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else{
        console.log(chalk.red.inverse('Note already taken'))
    }  
}

const removeNote =(title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notes.length>notesToKeep.length){
        console.log(chalk.bgGreen("Note is removed!")) 
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.bgRed("No note found!"))
    }
    
}

const listNote = () =>
{
    console.log(chalk.blue("Your notes..."))
    const notes = loadNotes()
    if(notes.length>0)
    {
        notes.forEach((note)=> {
            console.log(chalk.green(note.title))
        });
    }
}
const readNote = (title) =>{
    const notes = loadNotes()
    const noteReader = notes.find((note)=> note.title===title)
    if(noteReader)
    {
        console.log(chalk.blue.inverse(noteReader.title) + ' ' + noteReader.body)
    }
    else{
        console.log(chalk.red('No note found?'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () =>{
try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
}
catch(e){
    return []
}
} 




// const sum = function(a,b){
//     return a+b
// }


module.exports = {
    addNote: addNote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
}
