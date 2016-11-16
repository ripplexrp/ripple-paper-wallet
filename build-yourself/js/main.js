var rk = require('ripple-keypairs');

window.generateWallet = function(){
  var seed = rk.generateSeed();
  var keypair = rk.deriveKeypair(seed);
  var address = rk.deriveAddress(keypair.publicKey);
  return {"address" : address, "secret" : seed};
} 