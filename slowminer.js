function spin() {
  miner.start();
  admin.sleepBlocks(1);
  miner.stop();
}

function slowMiner() {
  while(true) {
    admin.sleep(2);
    spin();
  }
}

function unlockAll() {
  web3.eth.getAccounts(function(err, accounts) {
    accounts.forEach(function(id) {
      personal.unlockAccount(id, "l", 60*60*24);
    });
  });
}

unlockAll();
slowMiner();
