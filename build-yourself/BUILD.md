#Ripply.eu

## Paper Wallet Generator Build Instructions for OS X and Linux
Follow these instructions to manually build sensitive js code for the ripply paper wallet generator.

Requirements:
- [ripple-keypairs](https://github.com/ripple/ripple-keypairs)
- [qrcodejs](https://github.com/davidshimjs/qrcodejs)

Run these commands:
* `git clone https://github.com/ripply-eu/ripply-paper-wallet`
* `cd ripply-paper-wallet/build-yourself/`
* `npm install ripple-keypairs qrcodejs`
* `browserify js/main.js -o js/bundle.js`
* `cat node_modules/qrcodejs/qrcode.min.js >> js/bundle.js`