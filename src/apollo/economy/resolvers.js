import { GraphQLError } from "graphql";
import dollarIdx from "../../dataBase/economyData/dollarIdx.js";
import goldIdx from "../../dataBase/economyData/goldIdx.js";
import nasdaq from "../../dataBase/economyData/nasdaq.js";
import recession from "../../dataBase/economyData/recession.js";
import stickyCpi from "../../dataBase/economyData/stickyCPI.js";
import us10yTreasury from "../../dataBase/economyData/us10yTreasury.js";
import vix from "../../dataBase/economyData/vix.js";
import usInterestRate from "../../dataBase/economyData/usInterestRate.js";
import usUnemployRate from "../../dataBase/economyData/usUnemployRate.js";
const economyResolvers = {
  Query: {
    // all Economy data

    oneYearEco: () => {
      let max = 522;
      let min = 52;
      let rand = Math.floor(Math.random() * (max - min) + min);
      let fedRandNum = Math.ceil(rand / 4.333333333) + 1;

      let oneYDollar = dollarIdx.slice(rand - 52, rand);
      let oneYGold = goldIdx.slice(rand - 52, rand);
      let oneYNasdaq = nasdaq.slice(rand - 52, rand);
      let oneYUS10yTreasury = us10yTreasury.slice(rand - 52, rand);
      let oneYVix = vix.slice(rand - 52, rand);
      let oneYUsInterestRate = usInterestRate.series.slice(
        fedRandNum - 12,
        fedRandNum
      );
      let oneYUsUnemployRate = usUnemployRate.series.slice(
        fedRandNum - 12,
        fedRandNum
      );

      let dollarLocData = [];
      let dollarCdleData = [];
      let fineDollarData = [];

      let goldLocData = [];
      let goldCdleData = [];
      let fineGoldData = [];

      let nasdaqLocData = [];
      let nasdaqCdlData = [];
      let fineNasdaqData = [];

      let vixLocData = [];
      let vixCdlData = [];
      let fineVixData = [];

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
      fineDollarData = { localDate: dollarLocData, candleData: dollarCdleData };

      for (let i = 0; i < oneYGold.length; i++) {
        let localDateStr = oneYGold[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
        let bakedStr = firstStr + "/" + secondStr + "/" + thirdStr;
        goldLocData.push(bakedStr);
      }
      oneYGold.map((goldObj, i) => {
        goldCdleData.push([
          goldObj.openPrice,
          goldObj.closePrice,
          goldObj.lowPrice,
          goldObj.highPrice,
        ]);
      });
      fineGoldData = { localDate: goldLocData, candleData: goldCdleData };

      for (let i = 0; i < oneYNasdaq.length; i++) {
        let localDateStr = oneYNasdaq[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
        let bakedStr = firstStr + "/" + secondStr + "/" + thirdStr;
        nasdaqLocData.push(bakedStr);
      }
      oneYNasdaq.map((nasdaqObj, i) => {
        nasdaqCdlData.push([
          nasdaqObj.openPrice,
          nasdaqObj.closePrice,
          nasdaqObj.lowPrice,
          nasdaqObj.highPrice,
        ]);
      });
      fineNasdaqData = { localDate: nasdaqLocData, candleData: nasdaqCdlData };

      for (let i = 0; i < oneYVix.length; i++) {
        let localDateStr = oneYVix[i].localDate;
        let firstStr = localDateStr.substring(0, 4);
        let secondStr = localDateStr.substring(4, 6);
        let thirdStr = localDateStr.substring(6, 8);
        let bakedStr = firstStr + "/" + secondStr + "/" + thirdStr;
        vixLocData.push(bakedStr);
      }
      oneYVix.map((vixObj, i) => {
        vixCdlData.push([
          vixObj.openPrice,
          vixObj.closePrice,
          vixObj.lowPrice,
          vixObj.highPrice,
        ]);
      });
      fineVixData = { localDate: vixLocData, candleData: vixCdlData };

      let allEcoData = {
        usInterestRate: { series: oneYUsInterestRate },
        gold: fineGoldData,
        dollar: fineDollarData,
        nasdaq: fineNasdaqData,
        recession: recession,
        usUnemployRate: { series: oneYUsUnemployRate },
        vix: fineVixData,
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
