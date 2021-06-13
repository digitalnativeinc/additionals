const opportunityType = {
  types: [
    {
      AccountInfo: 'AccountInfoWithTripleRefCount',
      Address: 'MultiAddress',
      LookupSource: 'MultiAddress',
      XCurrencyId: {
        chain_id: 'ChainId',
        currency_id: 'Bytes',
      },
      CurrencyIdOf: 'U32',
      CurrencyId: 'U32',
      TokenSymbol: {
        _enum: ['ACA', 'AUSD', 'DOT', 'XBTC', 'LDOT', 'RENBTC', 'SDN', 'PLM'],
      },
      AmountOf: 'Amount',
      Amount: 'i128',
    },
  ],
};

export default opportunityType