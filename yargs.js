/**
 *  Created by daiwenjuan on 2020/4/20 14:44.
 */
const yargs=require('yargs')
const argv=yargs
  .command('add',"Add a new note",{
    title:{
      describe:'Title of note',
      alias:'t',
      demandOption:true
    },
    body:{
      describe:'Body of note',
      alias:'b',
      demandOption: true
    }
  })
  .command('list',"List all notes")
  .help()
  .alias('help','h')
  .argv
console.log(argv)
