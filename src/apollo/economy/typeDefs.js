const economyTypeDefs = `#graphql

type GoldIdx {
  series : [[Float]]
}

type StickyCpi {
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
  goldIdx: GoldIdx!
  stickyCpiIdx: StickyCpi!
  dollarIdx: [DollarIdx!]!
  nasdaqIdx: [NasdaqIdx!]!
  recessionIdx : [RecessionIdx!]!
  us10yTreasuryIdx : [Us10yTreasury!]!
  vixIdx : [VixIdx!]!
}
  
`;
export default economyTypeDefs;
