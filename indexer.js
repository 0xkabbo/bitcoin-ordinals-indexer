const Client = require('bitcoin-core');
const express = require('express');
require('dotenv').config();

const client = new Client({
  network: process.env.BTC_NETWORK || 'mainnet',
  username: process.env.RPC_USER,
  password: process.env.RPC_PASSWORD,
  port: process.env.RPC_PORT || 8332
});

const app = express();

/**
 * Basic logic to fetch and scan a block for witness data (inscriptions)
 */
async function scanBlock(blockHeight) {
  try {
    const blockHash = await client.getBlockHash(blockHeight);
    const block = await client.getBlock(blockHash, 2); // 2 = Verbose with transactions

    console.log(`Scanning Block ${blockHeight} for Inscriptions...`);

    block.tx.forEach(tx => {
      // Ordinals logic looks for 'ord' envelope in witness data
      if (tx.vin) {
        tx.vin.forEach(input => {
          if (input.txinwitness) {
            const witness = input.txinwitness.join('');
            if (witness.includes('6f7264')) { // 'ord' in hex
              console.log(`[!] Inscription found in TX: ${tx.txid}`);
            }
          }
        });
      }
    });
  } catch (err) {
    console.error("Indexing error:", err.message);
  }
}

app.get('/api/status', (req, res) => {
  res.json({ status: "Indexer Active", network: "Bitcoin Mainnet" });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Ordinals API running on port ${PORT}`);
  // Start scanning from a specific height in a real scenario
  // scanBlock(800000); 
});
