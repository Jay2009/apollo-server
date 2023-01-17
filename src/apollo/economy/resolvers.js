import { GraphQLError } from "graphql";
import dollerIdx from "../../dataBase/economyData/dollarIdx.js";

let sixMthDollarData = dollerIdx.slice(0, 6);

const economyResolvers = {
  Query: {
    // 달러 인덱스 검색
    dollerIdx: () => {
      let sixMthData = sixMthDollarData;
      let fineData = [];

      for (let i = 0; i < sixMthData.length; i++) {
        console.log(sixMthData[i].localDate, "dfdfd");
        let toStrData = sixMthData[i].localDate;
        let firstStr = toStrData.substring(0, 4);
        let secondStr = toStrData.substring(4, 6);
        let thirdStr = toStrData.substring(6, 8);
        let bakedStr = firstStr + "-" + secondStr + "-" + thirdStr;
        let unixT = new Date(bakedStr).getTime() / 1000;
        let bakedData = { ...sixMthData[i], localDate: unixT };
        fineData.push(bakedData);
      }
      console.log(fineData, "@@@@@");
      return fineData;
    },
  },
};

export default economyResolvers;
