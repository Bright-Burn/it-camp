import React from 'react';
import {Table, TableColumn} from '@consta/uikit/Table'

interface Props {
  rows: any[]
}

export const ResultTable: React.FC<Props> = ({rows}) => {

  const columns: TableColumn<typeof rows[number]>[] = [
    {
      title: 'Режим',
      accessor: 'mode',
      align: 'center',
    },
    {
      title: 'Pзаб, атм',
      accessor: 'pressure',
    },
    {
      title: 'Qж, м³/сут',
      accessor: 'production',
    },
  ];
  return (
    <Table rows={rows} columns={columns}/>
  );
};

