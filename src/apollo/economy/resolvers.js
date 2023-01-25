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
      let dollarLocData = [];
      let dollarCdleData = [];
      let fineDollarData = [];

      let fineGold = [];
      let fineNasdaq = [];
      let fineUS10yTreasury = [];
      let fineVix = [];
      let fineInterRate = [];
      let fineRecession = [];

      // change localDate to unix time & transfer data format into Echart .
      for (let i = 0; i < oneYDollar.length; i++) {
        let localDateStr = oneYDollar[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
        let bakedStr = firstStr + "/" + secondStr + "/" + thirdStr;
        dollarLocData.push(bakedStr);
      }
      oneYDollar.map((dollarObj, i) => {
        dollarCdleData.push([
          dollarObj.openPrice,
          dollarObj.closePrice,
          dollarObj.lowPrice,
          dollarObj.highPrice,
        ]);
      });
      fineDollarData = { candleData: dollarCdleData, localDate: dollarLocData };

      for (let i = 0; i < oneYGold.length; i++) {
        let localDateStr = oneYGold[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
        let bakedStr = firstStr + "/" + secondStr + "/" + thirdStr;
        let bakedData = { ...oneYGold[i], localDate: bakedStr };
        fineGold.push(bakedData);
      }
      for (let i = 0; i < oneYNasdaq.length; i++) {
        let localDateStr = oneYNasdaq[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
        let bakedStr = firstStr + "/" + secondStr + "/" + thirdStr;
        let bakedData = { ...oneYNasdaq[i], localDate: bakedStr };
        fineNasdaq.push(bakedData);
      }
      for (let i = 0; i < oneYUS10yTreasury.length; i++) {
        let localDateStr = oneYUS10yTreasury[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
        let bakedStr = firstStr + "/" + secondStr + "/" + thirdStr;
        let bakedData = { ...oneYUS10yTreasury[i], localDate: bakedStr };
        fineUS10yTreasury.push(bakedData);
      }
      for (let i = 0; i < oneYVix.length; i++) {
        let localDateStr = oneYVix[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
        let bakedStr = firstStr + "/" + secondStr + "/" + thirdStr;
        let bakedData = { ...oneYVix[i], localDate: bakedStr };
        fineVix.push(bakedData);
      }

      let allEcoData = {
        usInterestRate: { series: oneYUsInterestRate },
        gold: fineGold,
        dollar: fineDollarData,
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
        let localDateStr = goldIdx[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
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
        let localDateStr = dollarIdx[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
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
        let localDateStr = nasdaq[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
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
        let localDateStr = us10yTreasury[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
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
        let localDateStr = vix[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
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
