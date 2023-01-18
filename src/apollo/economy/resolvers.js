import { GraphQLError } from "graphql";
import dollerIdx from "../../dataBase/economyData/dollarIdx.js";
import goldIdx from "../../dataBase/economyData/goldIdx.js"
import nasdaq from "../../dataBase/economyData/nasdaq.js"
import recession from "../../dataBase/economyData/recession.js"
import stickyCpi from "../../dataBase/economyData/stickyCPI.js"
import us10yTreasury from "../../dataBase/economyData/us10yTreasury.js"
import vix from "../../dataBase/economyData/vix.js"

let sixMthGold = {series : goldIdx.series.slice(0, 6)}
let sixMthStickyCpi = {series : stickyCpi.series.slice(0, 6)}
let sixMthDollar = dollerIdx.slice(0, 6);
let sixMthNasdaq = nasdaq.slice(0, 6);
let sixMthRecession = recession.slice(0, 6);
let sixMthUs10yTreasury = us10yTreasury.slice(0, 6);
let sixMthVix = vix.slice(0, 6);



const economyResolvers = {
  Query: {
    // gold index
    goldIdx: () => sixMthGold,
    
    // sticky cpi index
    stickyCpiIdx: () => sixMthStickyCpi,

    // nasdaq index
    recessionIdx: () => sixMthRecession,

    // dollar index
    dollarIdx: () => {
      let sixMthData = sixMthDollar;
      let fineData = [];
      for (let i = 0; i < sixMthData.length; i++) {
        let toStrData = sixMthData[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime() / 1000;
        let bakedData = { ...sixMthData[i], localDate: unixT };
        fineData.push(bakedData);
      }
      return fineData;
    },

    // nasdaq index
    nasdaqIdx: () => {
      let sixMthData = sixMthNasdaq;
      let fineData = [];
      for (let i = 0; i < sixMthData.length; i++) {
        let toStrData = sixMthData[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime() / 1000;
        let bakedData = { ...sixMthData[i], localDate: unixT };
        fineData.push(bakedData);
      }
      return fineData;
    },

    us10yTreasuryIdx: () => {
      let sixMthData = sixMthUs10yTreasury;
      let fineData = [];
      for (let i = 0; i < sixMthData.length; i++) {
        let toStrData = sixMthData[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime() / 1000;
        let bakedData = { ...sixMthData[i], localDate: unixT };
        fineData.push(bakedData);
      }
      return fineData;
    },

    vixIdx: () => {
      let sixMthData = sixMthVix;
      let fineData = [];
      for (let i = 0; i < sixMthData.length; i++) {
        let toStrData = sixMthData[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime() / 1000;
        let bakedData = { ...sixMthData[i], localDate: unixT };
        fineData.push(bakedData);
      }
      return fineData;
    },
  },
};

export default economyResolvers;
