function checkAllBalances() {
  web3.eth.getAccounts(function(err, accounts) {
    accounts.forEach(function(id) {
      web3.eth.getBalance(id, function(err, balance) {
	console.log("" + id + ":\tbalance: " + web3.fromWei(balance, "ether") + " ether");
      });
    });
  });
};

function spin() {
  miner.start();
  admin.sleepBlocks(1);
  miner.stop();
}

function unlockAll() {
  web3.eth.getAccounts(function(err, accounts) {
    accounts.forEach(function(id) {
      personal.unlockAccount(id, "l", 60*60*24);
    });
  });
}

function slowMiner() {
  while(true) {
    admin.sleep(2);
    spin();
  }
}

unlockAll();
