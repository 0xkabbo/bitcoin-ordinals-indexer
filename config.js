module.exports = {
  rpc: {
    user: process.env.RPC_USER || 'user',
    pass: process.env.RPC_PASSWORD || 'pass',
    port: process.env.RPC_PORT || 8332,
    host: 'localhost'
  },
  indexing: {
    startBlock: 767430, // First inscription block
    batchSize: 10
  }
};
