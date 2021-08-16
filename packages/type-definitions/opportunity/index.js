var _default = {
  types: [
    {
      minmax: [0, undefined],
      types: {
        AccountInfo: 'AccountInfoWithTripleRefCount',
        Address: 'MultiAddress',
        LookupSource: 'MultiAddress',
        XCurrencyId: {
          chain_id: 'ChainId',
          currency_id: 'Bytes',
        },
        CurrencyIdOf: 'CurrencyId',
        CurrencyId: {
          _enum: {
            Token: 'TokenSymbol',
          },
        },
        TokenSymbol: {
          _enum: ['ACA', 'AUSD', 'DOT', 'XBTC', 'LDOT', 'RENBTC', 'SDN', 'PLM'],
        },
        AmountOf: 'Amount',
        Amount: 'i128',
        DataVersion: 'u64',
        RequestIdentifier: 'u64',
        SpecIndex: 'Vec<u8>',
        CDP: {
          liquidation_fee: 'Balance',
          max_collateraization_rate: 'U256',
          stability_fee: 'Balance',
        },
        SocketIndex: 'u32',
      },
    },
  ],
};

module.exports = _default;
