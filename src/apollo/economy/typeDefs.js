const economyTypeDefs = `#graphql
  type DollarIdx {
    localDate: String
      closePrice: Float,
      openPrice: Float,
      highPrice: Float,
      lowPrice: Float,
      accumulatedTradingVolume: Int,
  }

  type Query {
    dollerIdx: [DollarIdx!]!
  }
  
`;
export default economyTypeDefs;
