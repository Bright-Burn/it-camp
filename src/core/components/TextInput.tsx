import React from 'react';
import css from './Sidebar.module.css'
import {Text} from '@consta/uikit/Text'

interface Props {

}

export const TextInput: React.FC<Props> = ({}) => {
  return (
    <div className={'container-column'}>
      <Text>Глубина</Text>
    </div>
  );
};

