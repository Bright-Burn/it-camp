import React from 'react';
import {Header, HeaderModule} from '@consta/uikit/Header'
import {Text} from '@consta/uikit/Text'
import {IconMoon} from '@consta/uikit/IconMoon';
import {User} from '@consta/uikit/User';
import css from './header.module.css'

interface Props {

}

export const MainHeader: React.FC<Props> = ({}) => {
  return (
    <Header
      style={{backgroundColor: 'var(--color-bg-secondary)', border: 'none'}}
      leftSide={
      <HeaderModule>
        <Text size={'l'} weight={'bold'}>
          ГПН-ЦР
        </Text>
      </HeaderModule>
      }
      rightSide={
        <HeaderModule>
          <div className={'container align-center'}>
            <IconMoon size={'xs'}  className={css.moonIcon}/>
            <User name={'Боб Бобович'} status="available" info={'Стажер'}/>
          </div>
        </HeaderModule>

      }
    />
  );
};

