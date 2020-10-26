const axios = require('axios')
const colors = require('colors')


class CryptoAPI {
    constructor(apiKey) {
       this.apiKey = apiKey;
       this.baseUrl = 'https://api.nomics.com/v1/currencies/ticker' 
    }


    async getPriceData(coinOption, currOption ){
        try{
            //formatter for currency
            const formatter = new Intl.NumberFormat('en-US', {
                style: 'currency' ,
                currency: currOption
            })

            const res = await axios.get(`${this.baseUrl}?key=${this.apiKey}&ids=${coinOption}&convert=${currOption}`)
        
            let output = '';

            res.data.forEach(coin => {
                output += `coin ${coin.symbol.yellow}  (${coin.name}) | Price: ${formatter.format(coin.price).green} | Rank: ${coin.rank.blue} \n` 
            })
            return output;
        }catch(err){
            handeleAPIError(err)
        }
    }
}

function handeleAPIError(err) {
    if(err.response.status ===401){
        throw new Error('Your API is invalid -- Go to https://nomics.com')
    }else if(err.response.status === 404){
        throw new Error('Your API is not responding')

    }else {
        throw new Error ('Somthing is not working')
    }
}


module.exports = CryptoAPI;