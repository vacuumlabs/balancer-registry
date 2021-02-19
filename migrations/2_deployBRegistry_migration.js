const BRegistry = artifacts.require('BRegistry');
const ExchangeProxy = artifacts.require('ExchangeProxy');

module.exports = function (deployer) {
  const BFactoryAddress = '0xE1709acDFaF12dCaa0960dDB56902d71f09B657B';
  deployer
    .deploy(BRegistry, BFactoryAddress)
    .then(function () {
      // TODO: what to do about WETH address?
      const WETHAddress = '0xd0a1e359811322d97991e03f863a0c30c2cf029c';
      return deployer.deploy(ExchangeProxy, WETHAddress);
    })
    .then(function () {
      console.log({ BRegistry: BRegistry.address });
      console.log({ ExchangeProxy: ExchangeProxy.address });
    });
};
