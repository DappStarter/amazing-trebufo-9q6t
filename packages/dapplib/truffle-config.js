require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help future spot toy note spike erosion give private orange genre'; 
let testAccounts = [
"0xe261d24725fed05d4f9b3398d6cd0f74dd8d920a9ea9ffae6397b474b5c1ce2b",
"0xd1b5f0e33f52ad3955377a0842534d4198a1a34a4b4d3c394915eddf002b3309",
"0x4621ce32f3a5677230c909019396d6eb4ba2ac15c5aedb1dda859193d6ad8f4d",
"0xae4b49b27ff876b13d38945ca36dbae37dc77bad3b8c1d59bac363cc8e32d6a4",
"0x2f208f633f7e6f94a10f32a0035e637a8f746af8dc21dfcdb5c1cb94500aaab1",
"0x8aba91704f3b2f7091bfa387fbf85773736004af043ceb2408673687d819d063",
"0xa47b3a4018f486b129883b76e75d75363bc63acba43db44ec30f54c2f64a11a6",
"0x0b2d0d8aa0db8477d6e85f94436e4bb19866d78b056e486f3d53e91944f671f3",
"0x52e8da3239a22df8b44994febe70751bcb80859106049e4f8a341f24cb22a10e",
"0x7797e0a75c0b5dfb8be9457d9b751d662ed73287550db0b763d92fe964ab6909"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

