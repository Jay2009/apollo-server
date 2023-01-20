import { GraphQLError } from "graphql";
import dollarIdx from "../../dataBase/economyData/dollarIdx.js";
import goldIdx from "../../dataBase/economyData/goldIdx.js";
import nasdaq from "../../dataBase/economyData/nasdaq.js";
import recession from "../../dataBase/economyData/recession.js";
import stickyCpi from "../../dataBase/economyData/stickyCPI.js";
import us10yTreasury from "../../dataBase/economyData/us10yTreasury.js";
import vix from "../../dataBase/economyData/vix.js";
import usInterestRate from "../../dataBase/economyData/usInterestRate.js";

const economyResolvers = {
  Query: {
    // sticky cpi index
    stickyCpiIdx: () => stickyCpi.series,

    // nasdaq index
    recessionIdx: () => recession,

    // fixed interest rate
    usInterestRateIdx: () => usInterestRate.series,

    // gold index
    goldIdx: () => {
      let fineData = [];
      for (let i = 0; i < goldIdx.length; i++) {
        let toStrData = goldIdx[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime() / 1000;
        let bakedData = { ...goldIdx[i], localDate: unixT };
        fineData.push(bakedData);
      }

      return fineData;
    },

    // dollar index
    dollarIdx: () => {
      let fineData = [];
      for (let i = 0; i < dollarIdx.length; i++) {
        let toStrData = dollarIdx[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime() / 1000;
        let bakedData = { ...dollarIdx[i], localDate: unixT };
        fineData.push(bakedData);
      }

      return fineData;
    },

    // nasdaq index
    nasdaqIdx: () => {
      let fineData = [];
      for (let i = 0; i < nasdaq.length; i++) {
        let toStrData = nasdaq[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime() / 1000;
        let bakedData = { ...nasdaq[i], localDate: unixT };
        fineData.push(bakedData);
      }
      return fineData;
    },

    us10yTreasuryIdx: () => {
      let fineData = [];
      for (let i = 0; i < us10yTreasury.length; i++) {
        let toStrData = us10yTreasury[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime() / 1000;
        let bakedData = { ...us10yTreasury[i], localDate: unixT };
        fineData.push(bakedData);
      }
      return fineData;
    },

    vixIdx: () => {
      let fineData = [];
      for (let i = 0; i < vix.length; i++) {
        let toStrData = vix[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime() / 1000;
        let bakedData = { ...vix[i], localDate: unixT };
        fineData.push(bakedData);
      }
      return fineData;
    },
  },
};

export default economyResolvers;
