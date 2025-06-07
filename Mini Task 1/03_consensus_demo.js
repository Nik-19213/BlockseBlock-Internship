// Helper to generate random number in a range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// --- PoW Simulation ---
const minerA = { name: "MinerA", power: getRandomInt(1, 100) };
const minerB = { name: "MinerB", power: getRandomInt(1, 100) };

const powWinner = minerA.power > minerB.power ? minerA : minerB;
console.log("🔨 Proof of Work:");
console.log(`${minerA.name} Power: ${minerA.power}`);
console.log(`${minerB.name} Power: ${minerB.power}`);
console.log(`✅ Selected Validator: ${powWinner.name} (Highest Power)\n`);

// --- PoS Simulation ---
const stakerA = { name: "StakerA", stake: getRandomInt(100, 1000) };
const stakerB = { name: "StakerB", stake: getRandomInt(100, 1000) };

const posWinner = stakerA.stake > stakerB.stake ? stakerA : stakerB;
console.log("🪙 Proof of Stake:");
console.log(`${stakerA.name} Stake: ${stakerA.stake}`);
console.log(`${stakerB.name} Stake: ${stakerB.stake}`);
console.log(`✅ Selected Validator: ${posWinner.name} (Highest Stake)\n`);

// --- DPoS Simulation ---
const voters = [
  { name: "User1", vote: "DelegateA" },
  { name: "User2", vote: "DelegateA" },
  { name: "User3", vote: "DelegateB" },
];

const voteCounts = {};
voters.forEach(v => {
  voteCounts[v.vote] = (voteCounts[v.vote] || 0) + 1;
});

const dposWinner = Object.entries(voteCounts).reduce((a, b) => (a[1] > b[1] ? a : b));
console.log("🗳️ Delegated Proof of Stake:");
console.log(`Votes: ${JSON.stringify(voteCounts)}`);
console.log(`✅ Selected Delegate: ${dposWinner[0]} (Most Votes)\n`);
