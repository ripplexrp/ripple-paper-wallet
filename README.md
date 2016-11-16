**coldwallet.html checksum SHA1: cdfbe3260927b6073180a1099f02ef99ce0495e8**

## Tutorial: How to securely store XRP on a paper wallet

### What is a ripple wallet?

Ripple wallets look much like bitcoin wallets, they consist of public and private keys, however there are some key differences.

Ripple wallets are deterministic by design and are derived from the ripple seed, which is also referred to as the "secret key" in the ripple world. A ripple wallet seed is nothing more than random bytes, usually represented as a string that starts with "s", here's an example: snoPBrXtMeMyMHUVTgbuqAfg1SUTb. One ripple seed is designed to be able to generate multiple private / public key pairs, however practically all ripple wallet implementations use one ripple seed per ripple address.

You'll already likely be familiar with the ripple address, which is where other people send ripple to you. A ripple address starts with the letter "r" and looks like this: rvYAfWj5gh67oV6fW32ZzP3Aw4Eubs59B. Since the ripple address can be derived from the account seed, it is only crucial to backup the seed (secret key).

### What is a paper wallet?

Paper wallets are secure backups of your ripple wallets. XRP on your ripple wallet is truly secure only when you have full control of your ripple secret key, and not a third party, such as GateHub, RippleTrade, etc...

A paper wallet stores a new, randomly generated ripple secret key, represented as a string and as a QR code on paper. For convenience, a ripple address is also printed on a paper wallet. Paper wallets are meant to be stored offline in a safe place, such as a safe deposit box. Some people refer to this as "cold storage" or a "cold wallet". Paper wallets can either be generated securely in an offline environment or conveniently using an online paper wallet generator, which is a little bit less secure.

### How to create a ripple paper wallet offline?

*This tutorial requires a higher level of technical knowledge.*

1. Get a live linux distro such as TAILS (https://tails.boum.org/download/index.en.html) and burn to disk/usb. Verify the TAILS checksum.
2. Grab the latest Ripply coldwallet-SHA1-....html release file at https://github.com/ripply-eu/ripply-paper-wallet/releases and put it on a disk/USB. Verify the coldwallet-SHA1-....html file checksum. [Hint: `wget https://raw.githubusercontent.com/ripply-eu/ripply-paper-wallet/master/coldwallet-SHA1-....html`, `shasum coldwallet-SHA1-....html`] 
3. Disconnect from internet and reboot your computer with TAILS disk loaded and log in.
4. Open coldwallet html file in a reputable web browser such as Chrome or Firefox.
5. Print the generated paper wallet. If you don't have a printer, store it on a dedicated USB that you will keep offline.
6. You can save your ripple address (NOT the secret key) whereever to conveniently monitor the balance on your paper wallet.
7. Reboot, now you can safely send XRP to ripple address of the paper wallet.


### How to create a ripple paper wallet online?

*This tutorial doesn't require much technical knowledge.*

1. Navigate to https://ripply.eu/coldwallet.html
2. Copy the ripple address (NOT the secret key) and save it for later, to conveniently monitor the balance on your paper wallet
3. Click "Print".
4. Store the printed wallet in a safe place.
5. Now you can send XRP to ripple address of the paper wallet.

### How to restore funds from a paper wallet.

Option 1 - Use the Ripply Android app
- Download the app: https://play.google.com/store/apps/details?id=com.ripplewallet.ripplewallet
- Scan the secret key QR to import it
- Now you are able to send your XRP

Option 2 - Use one of the light Ripple clients
- This one has a nice interface: https://yxxyun.github.io/ripple-wallet/
- This one is pretty raw & minimalistic: https://jatchili.github.io/minimalist-ripple-client/

Option 3 - Use GateHub (requires identity verification)
- Register at https://gatehub.net
- Navigate to Wallets and click + (Add New) and import your Ripple secret key.
