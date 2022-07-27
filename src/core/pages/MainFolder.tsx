import React, {useEffect, useState} from 'react';
import {Text} from '@consta/uikit/Text'
import css from './MainFolder.module.css'
import Highcharts from 'highcharts/highstock'
import highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import {ResultTable} from './ResultTable';
import {dataType, getSeries} from '../utils/utils';

interface Props {
  data: dataType
}
export const MainFolder: React.FC<Props> = ({data}) => {
  const [nodal, setNodal] = useState<operationMode[]>([])
  const [opt, setOpt] = useState<highcharts.Options>({
    tooltip: {
      formatter: function() {
        return 'Qж, м3/сут = ' + this.x + ' </br> ' + ' Pзаб, атм = ' + this.y + ' </br> '+ this.series.name;
      }
    },
    yAxis: {
      title: {
        text: ' Pзаб, атм'
      }
    },
    xAxis: {
      crosshair: true,
      title: {
        text: 'Qж, м3/сут'
      }
    },
    chart: {
      height: 700,
    },
    title: {
      text: 'Узловой анализ фонтанной скважины'
    },
    series: [{
      name: 'VLP',
      type: "line",
      data: []
    },
    {
      name: 'IPR',
      type: "line",
      data: [],
    },
    {
      name: 'Режим работы скважины',
      type: "line",
      data: []
    }]
  })
  useEffect(() => {
    const series = getSeries(data)

    setOpt(prev => ({
      ...prev,
      series: series
    }))
    setNodal(data.nodal.map((n, i) => ({
      mode: i+1,
      pressure: n.p_wf,
      production: n.q_liq
    })))

  }, [data])

  return (
    <div className={`container-column flex-grow-1 ${css.MainFolderContainer}`}>
      <Text size={'m'} weight={'bold'}>Итог</Text>
      <div className={`container-column flex-grow-1`}>
      <HighchartsReact
        highcharts={Highcharts}
        options={opt}
      />
      </div>
      <ResultTable rows={nodal}/>
    </div>
  );
};

type operationMode = {mode: number, production: number, pressure: number}
