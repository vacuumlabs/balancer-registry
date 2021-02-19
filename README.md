# BActions Proxy migrated to NEAR

See parent repo for general info.

### Development

Before deploying the contracts in this repository BFactory needs to have been already deployed and `BFactoryAddress` needs to be set in the migration.

Deploy BRegistry and ExchangeProxy contracts to NEAR betanet:

```
env NEAR_MASTER_ACCOUNT=[NEAR_ACCOUNT_ID].betanet truffle migrate --network near_betanet
```

Tests haven't yet been setup for NEAR.
