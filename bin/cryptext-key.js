const program = require('commander')
const key = require('../commands/key')

program
    .command('set')
    .description('show API Key')
    .action(key.set)
    


program
    .command('show')
    .description('Set API Key -- Get at https://nomics.com')
    .action(key.show)
    

program
    .command('remove')
    .description('Remove API Key')
    .action(key.remove)


program.parse(process.argv)