const economyTypeDefs = `#graphql

type GoldIdx {
  localDate: Int
  closePrice: Float
  openPrice: Float
  highPrice: Float
  lowPrice: Float
  accumulatedTradingVolume: Int
}

type StickyCpi {
  series : [[Float]]
}

type UsInterestRate {
  series : [[Float]]
}

type RecessionIdx {
  start: Float
  end: Float
  start_date: String
  end_date: String
}

type DollarIdx {
  localDate: Int
  closePrice: Float
  openPrice: Float
  highPrice: Float
  lowPrice: Float
  accumulatedTradingVolume: Int
}

type NasdaqIdx {
  localDate: Int, 
  closePrice: Float,
  openPrice: Float,
  highPrice: Float,
  lowPrice: Float,
  accumulatedTradingVolume: Int,
}

type Us10yTreasury {
  localDate: Int
  closePrice: Float
  openPrice: Float
  highPrice: Float
  lowPrice: Float
}

type VixIdx {
  localDate: Int
  closePrice: Float,
  openPrice: Float,
  highPrice: Float,
  lowPrice: Float,
  accumulatedTradingVolume: Int,
}

type Query {
  usInterestRateIdx : UsInterestRate!
  stickyCpiIdx: StickyCpi!
  goldIdx: [GoldIdx!]!
  dollarIdx: [DollarIdx!]!
  nasdaqIdx: [NasdaqIdx!]!
  recessionIdx : [RecessionIdx!]!
  us10yTreasuryIdx : [Us10yTreasury!]!
  vixIdx : [VixIdx!]!
}
  
`;
export default economyTypeDefs;
