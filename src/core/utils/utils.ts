import {Series} from 'highcharts';

export const getSeries = (data: dataType): Series[] => {
  const vlp: seriesData = {
    name: 'VLP',
    data: []
  }
  const ipr: seriesData =  {
    name: 'IPR',
    data: [],
  }
  const production: seriesData = {
    name: 'Режим работы скважины',
    data: []
  }
  data.ipr.p_wf.forEach((p, i) => {
    vlp.data.push([data.ipr.q_liq[i], p ])
  })
  data.vlp.p_wf.forEach((p, i) => {
    ipr.data.push([ data.ipr.q_liq[i], p])
  })
  const seriesData = [vlp, ipr, production ]

  // @ts-ignore
  return seriesData
}

export type dataType = {
  vlp: data
  ipr: data
  nodal: {
    p_wf: number
    q_liq: number
  }[]
}
type data = {
  p_wf: number[]
  q_liq: number[]
}
type seriesData = {
  name: string
  data: number[][]
}
