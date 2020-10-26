# Cryptext (Sample Project)

***CLI For cryptocurrency price***

Command Line interface written in Node.js to check cryptocurrency prices.

**`Note :- `**  To use this , you need to Register at http://nomics.com and get your own API key.

## Usage 

```Shell
    $ npm install
    $ sudo npm link
```

## Commands

```shell
# Help & Commands
   $ cryptext -h

# Version
   $ cryptext -V

# API Key Commands
   $ cryptext key set
   $ cryptext key show
   $ cryptext key remove


# Crypto Check Commands (default: BTC , ETH, XRP)
   $ cryptext check price 
   $ cryptext check price --coin=BTC 
   $ cryptext check price --curr=RUP
   $ cryptext check price --coin=BTC --curr=RUP
```

## Project Structure

```shell
   Cryptext
   ├── bin                 # CLI structure and command discription
   ├── commands            # functions for command execution 
   ├── lib                 # Api and logic function
   └── utils               # utility functions

```