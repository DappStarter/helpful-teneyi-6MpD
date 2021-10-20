require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth spice punch grace slender equal gas'; 
let testAccounts = [
"0x7849ba9068e4aa833bfe50df467c1c8f2a9b385a24443f1070ab978c5d30c86f",
"0xe62d1e158f9cd1a70ae10db7d933a404137a2991c9b139aa0cc16ce8260aecb0",
"0xd4e27273e2ea2916deb71906a8ec3f357702dab3b74b127af35b810fa29e5d00",
"0x610951456c808291de1a57c2eb5626d3cfe2c40743c50cc3619945107216f135",
"0x56791b44e1b8ff6e6ea7a2eb7d88cfd2bc18504fbc4ac26121049ddf3f94b7bc",
"0x42256293dbc273213570b8fe5e48bf66250d9c34fe1b4ebc570fcd6a4e326f3a",
"0xc90d7dcc1fd6f3204c70e094582b799e02618d39d458c1ee61af249c998c979e",
"0x72d03fa7b2bbc91127c167282186085f810316e79ec7ddf0a90d90d9eb8cb3a5",
"0x35e426427e67e13a700808195f352b046790c4507f9c9f0300464ab01bf0cb5c",
"0xa6a0cbed99de0a6a5a8b28e55faed28e82aaaf826310c9fc292a434523c9978f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

