import React from 'react';
import css from './Sidebar.module.css'
import {Text} from '@consta/uikit/Text'
import {TextField} from '@consta/uikit/TextField';
import {Button} from '@consta/uikit/Button';
import {IconPlay} from '@consta/uikit/IconPlay';
interface Props {

}

export const Sidebar: React.FC<Props> = ({}) => {
  return (
    <div className={css.sidebarContainer}>
      <div className={'container-column flex-grow-1'}>
        <Text weight={'bold'} size={'xl'} className={css.sidebarTitle}>
          Расчет режима работы добывающей скважины
        </Text>
        <Text weight={'regular'} className={css.subTitle}>
          Конструкция скважины
        </Text>
        <TextField label="Глубина" type="text" placeholder="Введите глубину м" size={'s'} className={css.input}/>
        <TextField label="Угол искривления" type="text" placeholder="Введите угол г°" size={'s'} className={css.input}/>

        <Text weight={'regular'} className={`${css.subTitle} ${css.subTitleMargin}`}>
          Физико-химические свойства
        </Text>
        <TextField label="Плотность нефти" type="text" placeholder="Введите плотность кг/м3" size={'s'} className={css.input}/>
        <TextField label="Плотность воды" type="text" placeholder="Введите плотность кг/м3"  size={'s'} className={css.input}/>
        <TextField label="Обводненность" type="text" placeholder="Введите обводненность %"  size={'s'} className={css.input}/>
        <TextField label="Газовый фактор" type="text" placeholder="Введите фактор м3/т"  size={'s'} className={css.input}/>
      </div>
      <div className={'container'}>
        <Button view={'ghost'} size={'m'} className={css.button} label={'Очистить'}/>
        <Button view={'primary'} size={'m'} className={css.button} label={'Рассчитать'} iconRight={IconPlay}/>
      </div>
    </div>
  );
};

