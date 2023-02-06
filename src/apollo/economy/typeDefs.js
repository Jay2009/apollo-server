const economyTypeDefs = `#graphql

type GoldIdx {
  localDate: [String]
  candleData : [[Float]]
}

type StickyCpi {
  series : [[Float]]
}

type UsInterestRate {
  series : [[Float]]
}
type UsUnemployRate {
  series : [[Float]]
}

type RecessionIdx {
  start: Float
  end: Float
  start_date: String
  end_date: String
  content: String
}

type DollarIdx {
  localDate: [String]
  candleData : [[Float]]
}

type NasdaqIdx {
  localDate: [String]
  candleData : [[Float]]
}

type Us10yTreasury {
  localDate: [String]
  candleData : [[Float]]
}

type VixIdx {
  localDate: [String]
  candleData : [[Float]]
}
type AllEconomy {
  usInterestRate : UsInterestRate! 
  gold: GoldIdx!
  dollar: DollarIdx!
  nasdaq: NasdaqIdx!
  recession : [RecessionIdx!]!
  usUnemployRate : UsUnemployRate!
  vix : VixIdx!
}

type Query {
  oneYearEco : AllEconomy!
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
