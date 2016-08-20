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

slowMiner()
