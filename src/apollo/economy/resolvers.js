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
    // all Economy data

    oneYearEco: () => {
      console.log(
        dollarIdx.length,
        goldIdx.length,
        nasdaq.length,
        recession.length,
        stickyCpi.series.length,
        us10yTreasury.length,
        vix.length,
        usInterestRate.series.length
      );
      // let sixMthStickyCpi = { series: stickyCpi.series.slice(0, 6) };
      // let sixMthDollar = dollarIdx.slice(0, 6);
      // let sixMthNasdaq = nasdaq.slice(0, 6);
      // let sixMthRecession = recession.slice(0, 6);
      // let sixMthUs10yTreasury = us10yTreasury.slice(0, 6);
      // let sixMthVix = vix.slice(0, 6);

      let max = 522;
      let min = 52;
      let rand = Math.floor(Math.random() * (max - min) + min);
      let interestRand = rand * 7.01923076923;
      let test = interestRand - 365;
      console.log(interestRand, test, "test");

      let oneYDollar = dollarIdx.slice(rand - 52, rand);
      let oneYUsInterestRate = usInterestRate.series.slice(
        interestRand - 365,
        interestRand
      );
      console.log(oneYUsInterestRate[0], oneYDollar[0]);
      //console.log(oneYUsInterestRate);
      //console.log(oneYearDollar, oneYearDollar.length);

      let fineData = [];
      for (let i = 0; i < oneYDollar.length; i++) {
        let toStrData = oneYDollar[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime() / 1000;
        let bakedData = { ...oneYDollar[i], localDate: unixT };
        fineData.push(bakedData);
      }

      let allEcoData = {
        usInterestRate: { series: usInterestRate.series },
        stickyCpi: { series: stickyCpi.series },
        gold: goldIdx,
        dollar: dollarIdx,
        nasdaq: nasdaq,
        recession: recession,
        us10yTreasury: us10yTreasury,
        vix: vix,
      };
      return allEcoData;
    },

    // sticky cpi index
    stickyCpiIdx: () => {
      let stickyCpiIdx = { series: stickyCpi.series };
      return stickyCpiIdx;
    },

    // nasdaq index
    recessionIdx: () => recession,

    // fixed interest rate
    usInterestRateIdx: () => {
      let usInterestRateIdx = { series: usInterestRate.series };
      return usInterestRateIdx;
    },

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
