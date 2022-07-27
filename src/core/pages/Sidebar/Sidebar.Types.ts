
export type dataType =  {
  "inclinometry": {
    "MD"?: number[],
    "TVD"?: number[]
  },
  "casing":{
    "d": number
  },
  "tubing": {
    "d"?: number,
    "h_mes"?: number
  },
  "pvt": {
    "wct"?: number,
    "rp"?: number,
    "gamma_oil"?: number,
    "gamma_gas"?: number,
    "gamma_wat"?: number,
    "t_res"?: number,
    "pb"?: number
  },
  "p_wh": number,
  "geo_grad": number,
  "h_res": number,
  "p_res": number,
  "pi": number
}
export type dataProps = keyof dataType |
  'MD' |
  "TVD" |
  "d" |
  "h_mes" |
  "wct" |
  "rp" |
  "gamma_oil" |
  "gamma_gas" |
  "gamma_wat" |
  "t_res" |
  "pb"



export type externalDataType =
  "casingD" |
  "tubingD" |
  "h_mes" |
  "wct" |
  "rp" |
  "gamma_oil" |
  "gamma_gas" |
  "gamma_wat" |
  "t_res" |
  "pb" |
  "p_wh" |
  "geo_grad" |
  "h_res" |
  "p_res" |
  "pi"



export type inclinometry = {
  "MD"?: number[]
  "TVD"?: number[]
}