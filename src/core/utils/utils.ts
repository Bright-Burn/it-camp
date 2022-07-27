import highcharts from 'highcharts';

export const getSeries = (data: dataType):  highcharts.SeriesLineOptions[] => {
  const vlp: highcharts.SeriesLineOptions = {
    name: 'VLP',
    type: "line",
    data: []
  }
  const ipr: highcharts.SeriesLineOptions =  {
    name: 'IPR',
    type: "line",
    data: [],
  }
  const production: highcharts.SeriesLineOptions  = {
    name: 'Режим работы скважины',
    type: "line",
    data: [],
    lineWidth: 0,
    marker: {
      enabled: true,
      radius: 6
    },
    states: {
      hover: {
        lineWidthPlus: 0
      }
    }
  }
  data.ipr.p_wf.forEach((p, i) => {
    vlp.data?.push([data.ipr.q_liq[i], p ])
  })
  data.vlp.p_wf.forEach((p, i) => {
    ipr.data?.push([ data.ipr.q_liq[i], p])
  })
  data.nodal.forEach(p => {
    production.data?.push([p.p_wf, p.q_liq])
  })
  const seriesData = [vlp, ipr, production ]


  return seriesData
}
const checkNegativeZero = (value: string) => {
  switch (value) {
    case '-0':
      return '0'
    case '-0,0':
      return '0,0'
    case '-0,00':
      return '0,00'
  }
  return value
}

export const numberFormatter = (value: string | number, toFixed = 0, factor = 1) => {
  if (isNaN(+value)) return ' '
  const formatter = new Intl.NumberFormat('ru-RU', { maximumFractionDigits: toFixed })
  return checkNegativeZero(formatter.format(+value * factor))
}
export const getTrimmedValue = (value: string) => value.replace(/\s/g, '')
export const replaceCommaToDot = (value: string) => value.replace(',', '.')



export type dataType = {
  vlp: data
  ipr: data
  nodal: nodal[]
}
type data = {
  p_wf: number[]
  q_liq: number[]
}

export type nodal = {
  p_wf: number
  q_liq: number
}