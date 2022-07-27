import {getTrimmedValue, replaceCommaToDot} from "../../utils/utils";
import { dataType, externalDataType, inclinometry} from "./Sidebar.Types";
export const convertData = (data: Partial<Record<externalDataType, string> & inclinometry>): dataType => {
  let value: dataType = {
    inclinometry: {
      MD: data.MD,
      TVD: data.TVD
    },
    casing: {
      d: data.casingD ? +data.casingD :0,
    },
    tubing: {
      d: data.tubingD ? +data.tubingD : 0,
      h_mes: data.h_mes ? +data.h_mes :0,
    },
    pvt: {
      gamma_gas: data.gamma_gas ? +data.gamma_gas :0,
      gamma_oil: data.gamma_oil ? +data.gamma_oil :0,
      gamma_wat: data.gamma_wat ? +data.gamma_wat :0,
      pb: data.pb ? +data.pb :0,
      rp: data.rp ? +data.rp :0,
      t_res: data.t_res ? +data.t_res :0,
      wct: data.wct ? +data.wct :0,
    },
    geo_grad: data.geo_grad ? +data.geo_grad :0,
    h_res: data.h_res ? +data.h_res :0,
    p_res: data.p_res ? +data.p_res :0,
    p_wh: data.p_wh ? +data.p_wh :0,
    pi: data.pi ? +data.pi :0,

  }
  return value
}

export const setValue = (
  prop: externalDataType | "TVD" | "MD",
  outerValue: string | null,
  data: Partial<Record<externalDataType, string> & inclinometry> ): Partial<Record<externalDataType, string> & inclinometry>  => {
  let currData:  Partial<Record<externalDataType, any> & inclinometry> = {...data}
  let commaValue = replaceCommaToDot(outerValue + '')
  let trimmedValue = getTrimmedValue(commaValue)
  let value  = !isNaN(+trimmedValue)? trimmedValue : data[prop]
  if(outerValue === null) {
    currData[prop] = ''
    return currData
  }
  switch (prop) {
    case "MD":
    case "TVD":
      {
      let value = (outerValue + '').split(',').filter(v => +v).map(v => +v)
      currData[prop] = value
      break;
    }
    default: {
      currData[prop] = value
    }
  }
  return currData
}

