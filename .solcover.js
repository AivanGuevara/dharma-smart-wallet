module.exports = {
  norpc: true,
  testCommand: 'node --max-old-space-size=4096 ./scripts/test/testCoverage.js',
  compileCommand: 'node --max-old-space-size=4096 ../node_modules/.bin/truffle compile',
  copyPackages: ['web3'],
  skipFiles: [
    'account-recovery/DharmaAccountRecoveryManager.sol',
    //'account-recovery/DharmaAccountRecoveryManagerV2.sol',
    'factories/key-ring/DharmaKeyRingFactoryV3.sol',
    'factories/smart-wallet/DharmaSmartWalletFactoryV2.sol',
    'helpers/CodeHashCache.sol',
    'helpers/ECDSAGroup.sol',
    'helpers/FactoryFactFinder.sol',
    'helpers/ImmutableCreate2Factory.sol',
    'helpers/IndestructibleRegistry.sol',
    'helpers/SmartWalletFactoryV1UserSigningKeyUpdater.sol',
    //'helpers/Timelocker.sol',
    //'helpers/TimelockerV2.sol',
    //'implementations/key-ring/AdharmaKeyRingImplementation.sol',
    'implementations/key-ring/DharmaKeyRingImplementationV0.sol',
    'implementations/key-ring/DharmaKeyRingImplementationV2.sol',
    //'implementations/smart-wallet/AdharmaSmartWalletImplementation.sol',
    'implementations/smart-wallet/DharmaSmartWalletImplementationV0.sol',
    'implementations/smart-wallet/DharmaSmartWalletImplementationV1.sol',
    'implementations/smart-wallet/DharmaSmartWalletImplementationV2.sol',
    'implementations/smart-wallet/DharmaSmartWalletImplementationV3.sol',
    'implementations/smart-wallet/DharmaSmartWalletImplementationV4.sol',
    //'implementations/smart-wallet/DharmaSmartWalletImplementationV5.sol',
    'implementations/smart-wallet/DharmaSmartWalletImplementationV6.sol',
    'implementations/smart-wallet/DharmaSmartWalletImplementationVX.sol',
    'mock/MockCodeCheck.sol',
    'mock/RelayContract.sol',
    'mock/RelayContractV2.sol',
    //'multisigs/DharmaUpgradeMultisig.sol',
    //'multisigs/DharmaKeyRegistryMultisig.sol',
    //'multisigs/DharmaAccountRecoveryOperatorMultisig.sol',
    'openzeppelin-upgradeability/cryptography/ECDSA.sol',
    'openzeppelin-upgradeability/ownership/Ownable.sol',
    'openzeppelin-upgradeability/upgradeability/AdminUpgradeabilityProxy.sol',
    'openzeppelin-upgradeability/upgradeability/BaseAdminUpgradeabilityProxy.sol',
    'openzeppelin-upgradeability/upgradeability/BaseUpgradeabilityProxy.sol',
    'openzeppelin-upgradeability/upgradeability/Proxy.sol',
    'openzeppelin-upgradeability/upgradeability/ProxyAdmin.sol',
    'openzeppelin-upgradeability/upgradeability/UpgradeabilityProxy.sol',
    'openzeppelin-upgradeability/utils/Address.sol',
    'registries/DharmaKeyRegistryV1.sol',
    'test/BadBeacon.sol',
    'test/BadBeaconTwo.sol',
    'test/MockDharmaKeyRingFactory.sol',
    'test/DharmaTestingMultisig.sol',
    'test/MockAdharmaKeyRingFactory.sol',
    'test/TimelockEdgecaseTester.sol',
    'test/TimelockTwoStepOwnableTestContract.sol',
    'test/UpgradeBeaconImplementationCheck.sol'
  ]
}