# Bitcoin Ordinals Indexer

A professional backend service designed to track and index Satoshi-level artifacts on the Bitcoin network. This project provides a robust foundation for building Ordinal marketplaces, explorers, or wallet integrations by parsing block data and mapping inscriptions to specific Satoshis.

## Features
- **Satoshi Tracking:** Implements the Ordinal Theory logic to track individual Satoshis.
- **Inscription Parsing:** Extracts and stores inscription content (images, text, JSON) from witness data.
- **High-Speed Queries:** Optimized for rapid retrieval of inscription metadata via a local database.
- **REST API:** Ready-to-use endpoints for fetching Ordinal data by ID or wallet address.

## Technical Requirements
- Node.js v18+
- Access to a Bitcoin Full Node (`bitcoind`) with `txindex=1`
- SQLite or PostgreSQL for data persistence

## Getting Started
1. Clone the repository and install dependencies: `npm install`
2. Configure your `bitcoind` RPC credentials in `config.js`.
3. Start the indexer: `node indexer.js`
