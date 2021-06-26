export const types: {
    minmax: number[];
    types: {
        AccountInfo: string;
        Address: string;
        LookupSource: string;
        XCurrencyId: {
            chain_id: string;
            currency_id: string;
        };
        CurrencyIdOf: string;
        CurrencyId: {
            _enum: {
                Token: string;
            };
        };
        TokenSymbol: {
            _enum: string[];
        };
        AmountOf: string;
        Amount: string;
        DataVersion: string;
        RequestIdentifier: string;
        SpecIndex: string;
        CDP: {
            liquidation_fee: string;
            max_collateraization_rate: string;
            stability_fee: string;
        };
    };
}[];
