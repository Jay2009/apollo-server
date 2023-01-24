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
      let max = 522;
      let min = 52;
      let rand = Math.floor(Math.random() * (max - min) + min);
      let interRateRand = rand * 7.01923076923;

      let oneYDollar = dollarIdx.slice(rand - 52, rand);
      let oneYGold = goldIdx.slice(rand - 52, rand);
      let oneYNasdaq = nasdaq.slice(rand - 52, rand);
      let oneYUS10yTreasury = us10yTreasury.slice(rand - 52, rand);
      let oneYVix = vix.slice(rand - 52, rand);
      let oneYUsInterestRate = usInterestRate.series.slice(
        interRateRand - 365,
        interRateRand
      );

      let fineDollar = [];
      let fineGold = [];
      let fineNasdaq = [];
      let fineUS10yTreasury = [];
      let fineVix = [];
      let fineInterRate = [];
      let fineRecession = [];
      // change form from normal time to unix time.
      for (let i = 0; i < oneYDollar.length; i++) {
        let toStrData = oneYDollar[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime();
        let bakedData = { ...oneYDollar[i], localDate: unixT };
        fineDollar.push(bakedData);
      }
      console.log(fineDollar);
      for (let i = 0; i < oneYGold.length; i++) {
        let toStrData = oneYGold[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime();
        let bakedData = { ...oneYGold[i], localDate: unixT };
        fineGold.push(bakedData);
      }
      for (let i = 0; i < oneYNasdaq.length; i++) {
        let toStrData = oneYNasdaq[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime();
        let bakedData = { ...oneYNasdaq[i], localDate: unixT };
        fineNasdaq.push(bakedData);
      }
      for (let i = 0; i < oneYUS10yTreasury.length; i++) {
        let toStrData = oneYUS10yTreasury[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime();
        let bakedData = { ...oneYUS10yTreasury[i], localDate: unixT };
        fineUS10yTreasury.push(bakedData);
      }
      for (let i = 0; i < oneYVix.length; i++) {
        let toStrData = oneYVix[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime();
        let unixz = new Date(bakedStr).getTime();

        let bakedData = { ...oneYVix[i], localDate: unixT };
        fineVix.push(bakedData);
      }

      let allEcoData = {
        usInterestRate: { series: oneYUsInterestRate },
        gold: fineGold,
        dollar: fineDollar,
        nasdaq: fineNasdaq,
        recession: recession,
        us10yTreasury: fineUS10yTreasury,
        vix: fineVix,
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
        let unixT = new Date(bakedStr).getTime();
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
        let unixT = new Date(bakedStr).getTime();
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
        let unixT = new Date(bakedStr).getTime();
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
        let unixT = new Date(bakedStr).getTime();
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
        let unixT = new Date(bakedStr).getTime();
        let bakedData = { ...vix[i], localDate: unixT };
        fineData.push(bakedData);
      }
      return fineData;
    },
  },
};

export default economyResolvers;
