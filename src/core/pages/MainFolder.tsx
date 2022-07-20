import React, {useEffect, useState} from 'react';
import {Text} from '@consta/uikit/Text'
import css from './MainFolder.module.css'
import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import {ResultTable} from './ResultTable';
import {dataType, getSeries} from '../utils/utils';

interface Props {
  data: dataType
}

export const MainFolder: React.FC<Props> = ({data}) => {
  const [opt, setOpt] = useState({
    tooltip: {
      crosshairs: true,
      // shared: true,
      // @ts-ignore
      formatter: function() {
        // @ts-ignore
        return 'Qж, м3/сут = ' + this.x + ' </br> ' + ' Pзаб, атм = ' + this.y + ' </br> '+ this.series.name;
      }
    },
    yAxis: {
      title: {
        text: ' Pзаб, атм'
      }
    },
    xAxis: {
      title: {
        text: 'Qж, м3/сут'
      }
    },
    chart: {
      height: 600,
    },
    title: {
      text: 'My chart'
    },
    series: [{
      name: 'VLP',
      data: []
    },
      {
        name: 'IPR',
        data: [],
      }
      ,
      {
        name: 'Режим работы скважины',
        data: []
      }]
  })
  useEffect(() => {
    const series = getSeries(data)
    // @ts-ignore
    setOpt(prev => ({
      ...prev,
      series: series
    }))

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
      <ResultTable rows={[{
        mode: 1,
        pressure: 10,
        production: 9999
      }]}/>
    </div>
  );
};

