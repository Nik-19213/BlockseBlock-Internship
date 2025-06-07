const crypto = require('crypto');

class Block {
  constructor(index, timestamp, data, previousHash = '') {
    this.index = index;
    this.timestamp = timestamp;
    this.data = data;
    this.previousHash = previousHash;
    this.nonce = 0;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    const blockString = this.index + this.timestamp + JSON.stringify(this.data) + this.previousHash + this.nonce;
    return crypto.createHash('sha256').update(blockString).digest('hex');
  }

  mineBlock(difficulty) {
    const target = Array(difficulty + 1).join("0"); // e.g., "0000" for difficulty = 4
    const start = Date.now();
    while (this.hash.substring(0, difficulty) !== target) {
      this.nonce++;
      this.hash = this.calculateHash();
    }
    const end = Date.now();
    console.log(`✅ Block mined: ${this.hash}`);
    console.log(`🔁 Nonce attempts: ${this.nonce}`);
    console.log(`⏱️ Time taken: ${(end - start) / 1000}s`);
  }
}

// ⛏️ Simulate mining
let blockToMine = new Block(1, Date.now().toString(), { sender: "Alice", receiver: "Bob", amount: 25 }, "0");

const difficulty = 4;
console.log(`Mining block with difficulty ${difficulty}...`);
blockToMine.mineBlock(difficulty);
