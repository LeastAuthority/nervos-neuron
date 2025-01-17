# [0.18.0-beta.1](https://github.com/nervosnetwork/neuron/compare/v0.18.0-beta.0...v0.18.0-beta.1) (2019-08-22)


### Bug Fixes

* remove hash_type=Type in test ([9340e41](https://github.com/nervosnetwork/neuron/commit/9340e41))
* **neuron-ui:** fix the color of pagination ([3ffed72](https://github.com/nervosnetwork/neuron/commit/3ffed72))
* **neuron-ui:** fix the i18n text of pagination ([c779a20](https://github.com/nervosnetwork/neuron/commit/c779a20))
* address service test ([f743a06](https://github.com/nervosnetwork/neuron/commit/f743a06))
* don't restart when generate new address in normal sync ([66b6810](https://github.com/nervosnetwork/neuron/commit/66b6810))
* minBlockNumber select error ([acbafd0](https://github.com/nervosnetwork/neuron/commit/acbafd0))
* using appendLockHashInfos ([342061d](https://github.com/nervosnetwork/neuron/commit/342061d))
* **e2e:** Make sure to exit server ([559a11e](https://github.com/nervosnetwork/neuron/commit/559a11e))
* **neuron-ui:** disable the submit button when it's sending ([9fc7b7d](https://github.com/nervosnetwork/neuron/commit/9fc7b7d))
* **neuron-ui:** use the create api for creating wallets ([49edee8](https://github.com/nervosnetwork/neuron/commit/49edee8))
* only check success txs ([2ec2529](https://github.com/nervosnetwork/neuron/commit/2ec2529))
* reset when import wallet ([6be360e](https://github.com/nervosnetwork/neuron/commit/6be360e))


### Features

* **neuron-ui:** add more detailed error messages of the amount field ([a2503ff](https://github.com/nervosnetwork/neuron/commit/a2503ff))
* **neuron-ui:** add verification on updating amounts ([46ae8c1](https://github.com/nervosnetwork/neuron/commit/46ae8c1))
* check tx success regular intervals ([a1203da](https://github.com/nervosnetwork/neuron/commit/a1203da))
* not start from zero in indexer when create wallet ([25ed522](https://github.com/nervosnetwork/neuron/commit/25ed522))
* not start from zero in normal sync when create wallet ([50a3c73](https://github.com/nervosnetwork/neuron/commit/50a3c73))
* **neuron-ui:** fill the address field automatically on QR Code recognized as a valid address ([c8a6689](https://github.com/nervosnetwork/neuron/commit/c8a6689))
* **neuron-ui:** update the cycles on the outputs changing ([01d02e0](https://github.com/nervosnetwork/neuron/commit/01d02e0))
* **neuron-ui:** use real cycles ([874e781](https://github.com/nervosnetwork/neuron/commit/874e781))
* auto switch indexer or common sync ([ece382f](https://github.com/nervosnetwork/neuron/commit/ece382f))
* compute cycles ([2be05b3](https://github.com/nervosnetwork/neuron/commit/2be05b3))
* impl sync by indexer RPCs ([16fa2a4](https://github.com/nervosnetwork/neuron/commit/16fa2a4))
* Update Electron to v6 ([0977897](https://github.com/nervosnetwork/neuron/commit/0977897))
* **neuron-ui:** use the same naming strategy as importing mnemonic words ([694ac98](https://github.com/nervosnetwork/neuron/commit/694ac98))
* process fork in indexer mode ([a7ad2d5](https://github.com/nervosnetwork/neuron/commit/a7ad2d5))



# [0.18.0-beta.0](https://github.com/nervosnetwork/neuron/compare/v0.18.0-alpha.1...v0.18.0-beta.0) (2019-08-16)


### Bug Fixes

* generate address and notify wallet created when import keystore ([9eaf2f3](https://github.com/nervosnetwork/neuron/commit/9eaf2f3))


### Features

* **neuron-ui:** update display of recent activities ([57c13c9](https://github.com/nervosnetwork/neuron/commit/57c13c9))
* Add report issue menu item ([a3e49ff](https://github.com/nervosnetwork/neuron/commit/a3e49ff))
* **neuron-ui:** add import keystore ([d3a917c](https://github.com/nervosnetwork/neuron/commit/d3a917c))
* **neuron-ui:** check the JSON format before keystore validation ([d5621e5](https://github.com/nervosnetwork/neuron/commit/d5621e5))
* **neuron-ui:** memorize lists for performance ([07c8667](https://github.com/nervosnetwork/neuron/commit/07c8667))
* Show available update's version ([37c8639](https://github.com/nervosnetwork/neuron/commit/37c8639))



# [0.18.0-alpha.1](https://github.com/nervosnetwork/neuron/compare/v0.18.0-alpha.0...v0.18.0-alpha.1) (2019-08-12)


### Bug Fixes

* **neuron-ui:** handle overflow on recent activities ([b357209](https://github.com/nervosnetwork/neuron/commit/b357209))
* **neuron-wallet:** set the language on app ready ([875cd5c](https://github.com/nervosnetwork/neuron/commit/875cd5c))


### Features

* **neuron-ui:** add custom scrollbar on activity list ([84d10d2](https://github.com/nervosnetwork/neuron/commit/84d10d2))
* **neuron-ui:** adjust the layout of list ([6a11f99](https://github.com/nervosnetwork/neuron/commit/6a11f99))
* **neuron-ui:** disable overflow hidden on activities ([01ff207](https://github.com/nervosnetwork/neuron/commit/01ff207))
* **neuron-ui:** scroll the overview view to the top on wallet switching ([45997d6](https://github.com/nervosnetwork/neuron/commit/45997d6))
* **neuron-ui:** update confirmation threshold of confirmations ([581fa70](https://github.com/nervosnetwork/neuron/commit/581fa70))



# [0.18.0-alpha.0](https://github.com/nervosnetwork/neuron/compare/v0.17.0-alpha.9...v0.18.0-alpha.0) (2019-08-10)


### Features

* **neuron-ui:** remove highlight on values in recent activities ([bc052ac](https://github.com/nervosnetwork/neuron/commit/bc052ac))
* display recent activities in sentence style ([b1af1fb](https://github.com/nervosnetwork/neuron/commit/b1af1fb))



# [0.17.0-alpha.9](https://github.com/nervosnetwork/neuron/compare/v0.17.0-alpha.8...v0.17.0-alpha.9) (2019-08-08)


### Bug Fixes

* early return when first-not-match ([08a708e](https://github.com/nervosnetwork/neuron/commit/08a708e))
* fetch size ([abdc01f](https://github.com/nervosnetwork/neuron/commit/abdc01f))
* not throw when push check range ([e2e6c90](https://github.com/nervosnetwork/neuron/commit/e2e6c90))
* waitForDrained ([b6712ff](https://github.com/nervosnetwork/neuron/commit/b6712ff))
* **neuron-ui:** set the font-size of footer to 12px ([c250678](https://github.com/nervosnetwork/neuron/commit/c250678))
* **neuron-wallet:** enable the i18n and update the wallet label of the application menu ([664ccc8](https://github.com/nervosnetwork/neuron/commit/664ccc8))


### Features

* Remove winston logger in favor of electron-log ([f3c228a](https://github.com/nervosnetwork/neuron/commit/f3c228a))



# [0.17.0-alpha.8](https://github.com/nervosnetwork/neuron/compare/v0.17.0-alpha.7...v0.17.0-alpha.8) (2019-08-06)



# [0.17.0-alpha.7](https://github.com/nervosnetwork/neuron/compare/v0.17.0-alpha.6...v0.17.0-alpha.7) (2019-08-05)


### Features

* **neuron-ui:** disable fadein animation on details list ([cb3153d](https://github.com/nervosnetwork/neuron/commit/cb3153d))
* **neuron-wallet:** enable select all ([5c0a577](https://github.com/nervosnetwork/neuron/commit/5c0a577))
* Add tsconfig plugin ts-transformer-imports to combile ([bb9cedf](https://github.com/nervosnetwork/neuron/commit/bb9cedf))
* Change space bewteen primary and secondary buttons to 10px ([cac5e8f](https://github.com/nervosnetwork/neuron/commit/cac5e8f))
* Do not use inline label for settings toggle button ([75eded1](https://github.com/nervosnetwork/neuron/commit/75eded1))
* Replace ts-node typeorm tasks with node dist js ([19ee2e7](https://github.com/nervosnetwork/neuron/commit/19ee2e7))
* Unify block status (property list) and miner info callouts style ([78e51c3](https://github.com/nervosnetwork/neuron/commit/78e51c3))



# [0.17.0-alpha.6](https://github.com/nervosnetwork/neuron/compare/v0.17.0-alpha.5...v0.17.0-alpha.6) (2019-08-05)


### Bug Fixes

* Add cachedNetwork to useMemo depencency ([733204c](https://github.com/nervosnetwork/neuron/commit/733204c))
* **neuron-wallet:** set current wallet empty if wallet list is empty ([b438509](https://github.com/nervosnetwork/neuron/commit/b438509))


### Features

* **neuron-ui:** add dynamic validation on the network editor ([c634d5b](https://github.com/nervosnetwork/neuron/commit/c634d5b))
* **neuron-ui:** make description update fluently ([cb9a5f0](https://github.com/nervosnetwork/neuron/commit/cb9a5f0))
* **neuron-ui:** separate the transaction view from the app ([7821ab3](https://github.com/nervosnetwork/neuron/commit/7821ab3))



# [0.17.0-alpha.5](https://github.com/nervosnetwork/neuron/compare/v0.17.0-alpha.4...v0.17.0-alpha.5) (2019-08-02)


### Bug Fixes

* **neuron-ui:** remove the quotation mark around error message ([5de8cba](https://github.com/nervosnetwork/neuron/commit/5de8cba))
* **neuron-wallet:** fix the error comes with deleting all wallets ([fa87136](https://github.com/nervosnetwork/neuron/commit/fa87136))


### Features

* using simple queue ([3595368](https://github.com/nervosnetwork/neuron/commit/3595368))
* **neuron-ui:** add basic style on the list header of transaction list ([3a7eeaf](https://github.com/nervosnetwork/neuron/commit/3a7eeaf))
* **neuron-ui:** add check on current wallet id on leaving settings view ([b33a238](https://github.com/nervosnetwork/neuron/commit/b33a238))
* **neuron-ui:** add CKB unit in the transaction fee field ([e6107e5](https://github.com/nervosnetwork/neuron/commit/e6107e5))
* **neuron-ui:** add dynamic prmopt in wallet wizard ([29372db](https://github.com/nervosnetwork/neuron/commit/29372db))
* **neuron-ui:** add notification panel ([f7984b0](https://github.com/nervosnetwork/neuron/commit/f7984b0))
* **neuron-ui:** add popping messages on copying and updating ([cd7d7e5](https://github.com/nervosnetwork/neuron/commit/cd7d7e5))
* **neuron-ui:** add the story of connection status component, and set the network name to 14px ([e940fdf](https://github.com/nervosnetwork/neuron/commit/e940fdf))
* **neuron-ui:** append network ips to network names in networks setting ([427941b](https://github.com/nervosnetwork/neuron/commit/427941b))
* **neuron-ui:** cache language configuration ([49e35c3](https://github.com/nervosnetwork/neuron/commit/49e35c3))
* **neuron-ui:** calculate transaction fee with user-specified price ([9ce3174](https://github.com/nervosnetwork/neuron/commit/9ce3174))
* **neuron-ui:** call generate mnemonic method from neuron-wallet in neuron-ui with remote module ([5a27c7b](https://github.com/nervosnetwork/neuron/commit/5a27c7b))
* **neuron-ui:** call networks controller's methods by remote module ([c4bc431](https://github.com/nervosnetwork/neuron/commit/c4bc431))
* **neuron-ui:** call transactions controller methods with remote module ([4751817](https://github.com/nervosnetwork/neuron/commit/4751817))
* **neuron-ui:** close the tx detail dialog on wallet switching ([5623f3b](https://github.com/nervosnetwork/neuron/commit/5623f3b))
* **neuron-ui:** display balance with thousandth delimiter ([07e4370](https://github.com/nervosnetwork/neuron/commit/07e4370))
* **neuron-ui:** double click on tx item shows its details ([383db66](https://github.com/nervosnetwork/neuron/commit/383db66))
* **neuron-ui:** handle current-wallet update and wallet-list update separately ([bd4c109](https://github.com/nervosnetwork/neuron/commit/bd4c109))
* **neuron-ui:** navigate to the Overview view on wallet switching ([bea4b20](https://github.com/nervosnetwork/neuron/commit/bea4b20))
* Configure dev-app-update.yml for electron-updater ([8fcf184](https://github.com/nervosnetwork/neuron/commit/8fcf184))
* **neuron-ui:** hide the top alert on removing the last error message from the notification panel ([e23d331](https://github.com/nervosnetwork/neuron/commit/e23d331))



# [0.17.0-alpha.4](https://github.com/nervosnetwork/neuron/compare/v0.17.0-alpha.3...v0.17.0-alpha.4) (2019-08-01)


### Bug Fixes

* **neuron-ui:** remove the quotation mark around error message ([5de8cba](https://github.com/nervosnetwork/neuron/commit/5de8cba))


### Features

* **neuron-ui:** show alert via electron for consistent with the behaviour of mnemonic validation ([3a3cee1](https://github.com/nervosnetwork/neuron/commit/3a3cee1))
* Add OK button to update message box ([9cba232](https://github.com/nervosnetwork/neuron/commit/9cba232))
* **neuron-ui:** add notification panel ([f7984b0](https://github.com/nervosnetwork/neuron/commit/f7984b0))



# [0.17.0-alpha.3](https://github.com/nervosnetwork/neuron/compare/v0.17.0-alpha.2...v0.17.0-alpha.3) (2019-08-01)


### Bug Fixes

* connection not found when delete wallet ([2afc7e7](https://github.com/nervosnetwork/neuron/commit/2afc7e7))
* Remove publisherName for win electron-builder configuration ([e1b3121](https://github.com/nervosnetwork/neuron/commit/e1b3121))
* Translation for installing update prompt message ([0540057](https://github.com/nervosnetwork/neuron/commit/0540057))


### Features

* **neuron-ui:** add the story of connection status component, and set the network name to 14px ([e940fdf](https://github.com/nervosnetwork/neuron/commit/e940fdf))
* Only bundle en and zh_CN language folders for mac ([6701659](https://github.com/nervosnetwork/neuron/commit/6701659))
* **neuron-ui:** double click on tx item shows its details ([383db66](https://github.com/nervosnetwork/neuron/commit/383db66))



# [0.17.0-alpha.2](https://github.com/nervosnetwork/neuron/compare/v0.17.0-alpha.1...v0.17.0-alpha.2) (2019-07-31)


### Bug Fixes

* check input of lock hashes ([c76590c](https://github.com/nervosnetwork/neuron/commit/c76590c))
* Connection "address" was not found in test ([c121a09](https://github.com/nervosnetwork/neuron/commit/c121a09))


### Features

* Only package AppImage for Linux ([c06b7bd](https://github.com/nervosnetwork/neuron/commit/c06b7bd))
* **neuron-ui:** set message dismission duration to 8s ([a9a09e1](https://github.com/nervosnetwork/neuron/commit/a9a09e1))
* **neuron-ui:** set page no to 1 on wallet switch ([9aa8d67](https://github.com/nervosnetwork/neuron/commit/9aa8d67))
* **neuron-wallet:** add default parameters in getAllByKeywords method ([bfd9b0d](https://github.com/nervosnetwork/neuron/commit/bfd9b0d))
* split tx service to multi files ([1dcf5e1](https://github.com/nervosnetwork/neuron/commit/1dcf5e1))
* using new tx service and delete old ([00da601](https://github.com/nervosnetwork/neuron/commit/00da601))



# [0.17.0-alpha.1](https://github.com/nervosnetwork/neuron/compare/v0.17.0-alpha.0...v0.17.0-alpha.1) (2019-07-30)


### Bug Fixes

* reuse q in Queue ([87bbf73](https://github.com/nervosnetwork/neuron/commit/87bbf73))
* update balance when address list is updated ([c0809bf](https://github.com/nervosnetwork/neuron/commit/c0809bf))


### Features

* **neuron-ui:** reduce the label width of transaction's basic info ([dc0606b](https://github.com/nervosnetwork/neuron/commit/dc0606b))
* **neuron-ui:** remove the exact block number in the synching progress component ([faf4c4f](https://github.com/nervosnetwork/neuron/commit/faf4c4f))
* Check for updates ([8b42970](https://github.com/nervosnetwork/neuron/commit/8b42970))
* Enable check updates menu item after error ([70e85c9](https://github.com/nervosnetwork/neuron/commit/70e85c9))
* **neuron-ui:** add popping messages on copying and updating ([cd7d7e5](https://github.com/nervosnetwork/neuron/commit/cd7d7e5))
* **neuron-ui:** append network ips to network names in networks setting ([427941b](https://github.com/nervosnetwork/neuron/commit/427941b))
* Rearrange main menu ([1b22932](https://github.com/nervosnetwork/neuron/commit/1b22932))
* remove the placeholder of send to address field ([2c1e0b3](https://github.com/nervosnetwork/neuron/commit/2c1e0b3))



# [0.17.0-alpha.0](https://github.com/nervosnetwork/neuron/compare/v0.16.0-alpha.2...v0.17.0-alpha.0) (2019-07-29)


### Bug Fixes

* be compatible with sdk ([21d7a13](https://github.com/nervosnetwork/neuron/commit/21d7a13))
* broadcast address info updated ([7aa4c83](https://github.com/nervosnetwork/neuron/commit/7aa4c83))
* lock utils for new lock script ([bb36ba2](https://github.com/nervosnetwork/neuron/commit/bb36ba2))
* move update address to sync process and buffer it ([fcad39a](https://github.com/nervosnetwork/neuron/commit/fcad39a))
* **neuron-ui:** fix a typo of 'ckb' to 'neuron' ([022882c](https://github.com/nervosnetwork/neuron/commit/022882c))
* **neuron-ui:** fix mnemonic formatting ([35ed784](https://github.com/nervosnetwork/neuron/commit/35ed784))


### Features

* add hash type in the script structure ([c09b6d2](https://github.com/nervosnetwork/neuron/commit/c09b6d2))
* address to lock hashes now include data and type ([02e3bca](https://github.com/nervosnetwork/neuron/commit/02e3bca))
* remove empty current wallet handler from the main view ([5810cbb](https://github.com/nervosnetwork/neuron/commit/5810cbb))
* **neuron-ui:** align list with description field ([ea9e034](https://github.com/nervosnetwork/neuron/commit/ea9e034))
* **neuron-ui:** ignore connection error in neuron-ui ([9f5593c](https://github.com/nervosnetwork/neuron/commit/9f5593c))
* **neuron-ui:** optimize updating descriptions ([6a72502](https://github.com/nervosnetwork/neuron/commit/6a72502))
* **neuron-ui:** show alert when amount is less than 61 CKB on sending transaction ([837c154](https://github.com/nervosnetwork/neuron/commit/837c154))
* **neuron-wallet:** remove spend-from menuitem ([6759e94](https://github.com/nervosnetwork/neuron/commit/6759e94))
* Updating to SDK v0.17.0 ([a7cc81c](https://github.com/nervosnetwork/neuron/commit/a7cc81c))


### Performance Improvements

* add debounce and sample on subjects for performance ([52095e5](https://github.com/nervosnetwork/neuron/commit/52095e5))



# [0.16.0-alpha.2](https://github.com/nervosnetwork/neuron/compare/v0.16.0-alpha.1...v0.16.0-alpha.2) (2019-07-26)


### Features

* Update app icon ([17936c4](https://github.com/nervosnetwork/neuron/commit/17936c4))
* **neuron-ui:** display balance with thousandth delimiter ([07e4370](https://github.com/nervosnetwork/neuron/commit/07e4370))



# [0.16.0-alpha.1](https://github.com/nervosnetwork/neuron/compare/v0.16.0-alpha.0...v0.16.0-alpha.1) (2019-07-26)


### Bug Fixes

* **neuron-wallet:** check min capacity ([ad77232](https://github.com/nervosnetwork/neuron/commit/ad77232))


### Features

* Trigger auto update on app launch ([a2ad858](https://github.com/nervosnetwork/neuron/commit/a2ad858))
* **neuron-ui:** call generate mnemonic method from neuron-wallet in neuron-ui with remote module ([5a27c7b](https://github.com/nervosnetwork/neuron/commit/5a27c7b))
* **neuron-ui:** call networks controller's methods by remote module ([c4bc431](https://github.com/nervosnetwork/neuron/commit/c4bc431))
* **neuron-ui:** call transactions controller methods with remote module ([4751817](https://github.com/nervosnetwork/neuron/commit/4751817))
* **neuron-ui:** remove UILayer ([f2f3145](https://github.com/nervosnetwork/neuron/commit/f2f3145))
* **neuron-ui:** subscribe current network id from neuron-wallet in neuron-ui ([1173622](https://github.com/nervosnetwork/neuron/commit/1173622))
* **package:** Rename package task to release, publish to GitHub ([e3d473e](https://github.com/nervosnetwork/neuron/commit/e3d473e))
* call methods of app controller with remote module ([cdc93a0](https://github.com/nervosnetwork/neuron/commit/cdc93a0))
* subscribe network list from neuron-wallet in neuron-ui ([b56ae1c](https://github.com/nervosnetwork/neuron/commit/b56ae1c))


