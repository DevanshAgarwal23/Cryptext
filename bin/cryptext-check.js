const program = require('commander')
const check = require('../commands/check')

program
    .command('price')
    .description("check price of coins")
    .option('--coin <type>' , 'Add specific coin types in CSV format' , 'BTC,ETH,XRP')
    .option('--curr <currrency>', 'change the currency', 'USD')
    .action(cmd => check.price(cmd))

program.parse(process.argv)