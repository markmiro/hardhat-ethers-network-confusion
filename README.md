# Main issue

`ethers` in `hardhat` doesn't give the expected url for the current network, but it could be a bug.

Run on localhost:

```
% npx hardhat run script.js --network localhost
Environment network:  localhost
Hardhat arguments network: localhost
---
Network url: http://127.0.0.1:8545
Provider url: http://localhost:8545
---
Address: 0x8d5455354D3CE72a50CD55390df690a782A97958
Balance: 0.0
```

Run on ropsten:

```
% npx hardhat run script.js --network ropsten
Environment network:  ropsten
Hardhat arguments network: ropsten
---
Network url: https://eth-ropsten.alchemyapi.io/v2/3RI0h7l9dI7NPpIWBKiASq6IV0cUFbRQ
Provider url: http://localhost:8545
---
Address: 0x8d5455354D3CE72a50CD55390df690a782A97958
Balance: 0.999540012008624775
```

Notice how the network URL is different from the provider url? The provider still returns the balance from ropsten, not localhost.

I think this is a bug.

# Related issues / attempted workarounds

Since `hre.provider` was confusing me, I figured `hre.network.provider` might work better. After all, `hre.network.provider.connection.url` returned the right url, which was promising.

However, `getBalance()` doesn't exist on `hre.network.provider`.

I guess it's not an `ethers` provider? I'm new to the Ethereum ecosystem, so I'm not sure what spec a provider should or shouldn't adhere to. I suspect there's a base spec and other tools like ethers and `hardhat-ethers` implement and extend the spec.

---

A related issue is how these plugins will inject `ethers` into the HRE:

- `@nomiclabs/hardhat-ethers`
- `@nomiclabs/hardhat-waffle`

I expected `@nomiclabs/hardhat-waffle` to only affect tests, but seems like it injects `ethers` to both tests and `scripts`. But since the hre is used both by scripts and tests, I guess this is expected? In any case, I don't expect a testing framework to inject things into my scripts.
