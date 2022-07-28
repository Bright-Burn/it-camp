import React, { useState} from 'react';
import css from './Sidebar.module.css'
import {Text} from '@consta/uikit/Text'
import {TextField} from '@consta/uikit/TextField';
import {Button} from '@consta/uikit/Button';
import {IconPlay} from '@consta/uikit/IconPlay';
import { externalDataType, inclinometry} from './Sidebar.Types';
import {convertData, setValue } from './Sidebar.Utils';
import {calculate} from "../../api";
import { dataType as inDataType } from '../../utils/utils';
interface Props {
  setCalculatedData: (data: inDataType) => void
}

export const Sidebar: React.FC<Props> = ({setCalculatedData}) => {
  const [data, setData] = useState<Partial<Record<externalDataType, string> & inclinometry>>({
    casingD: "0.1",
    gamma_gas: "0.6",
    gamma_oil: "0.8",
    gamma_wat: "1",
    h_mes: "1000",
    geo_grad: "3",
    h_res: "2000",
    MD: [0, 2000],
    TVD: [0, 2000],
    p_res: "250",
    p_wh: "20",
    pb: "150",
    pi: "1",
    rp: "150",
    t_res: "90",
    wct: "10",
    tubingD: "0.062"
  })

  const [md, setMD] = useState<string>('0, 2000')
  const [tvd, setTVD] = useState<string>('0, 2000')
  const onInputChange = (prop: externalDataType | "TVD" | "MD", value: string | null ) => {
    setData(setValue(prop, value, data))
  }
  const onSendBtnClick = () => {
    if(data && md && tvd) {
      calculate(convertData(data)).then(data => {
          if(!('detail' in data))
          setCalculatedData(data)
          else
            alert(JSON.stringify(data.detail))
        })
    }
  }
  const onCleanBtnClick = () => {
    setData({})
    setTVD('')
    setMD('')
  }

  return (
    <div className={css.sidebarContainer}>
      <div className={'container-column flex-grow-1'}>
        <Text weight={'bold'} size={'xl'} className={css.sidebarTitle}>
          Расчет режима работы добывающей скважины
        </Text>
        <div className={`container-column flex-grow-1 ${css.overflow}`}>
          <Text weight={'regular'} className={css.subTitle}>
            Инклинометрия скважины в формате MD, TVD
          </Text>
          <TextField label="MD1" type="text"
                     placeholder="Введите глубину, м"
                     size={'s'}
                     className={css.input}
                     value={md}
                     defaultValue={"1, 1000"}
                     onChange={({value}) => {
                       value && setMD(value)
                       onInputChange('MD', value)
                     }}

          />
          <TextField label="TVD"
                     type="text"
                     placeholder="Введите глубину, м"
                     size={'s'}
                     className={css.input}
                      value={tvd}
                     onChange={({value}) => {
                       value && setTVD(value)
                       onInputChange('TVD', value)
                     } }
          />

          <Text weight={'regular'} className={`${css.subTitle} ${css.subTitleMargin}`}>
            Данные по Эксплуатационной Колонне
          </Text>
          <TextField label="Диаметр ЭК, м"
                     type="text"
                     placeholder="Введите диаметр, м"
                     size={'s'}
                     className={css.input}
                     value={data?.casingD}
                     onChange={({value}) => onInputChange('casingD', value) }
          />

          <Text weight={'regular'} className={`${css.subTitle}  ${css.subTitleMargin}`}>
            Данные по Колонне Насосно-Компрессорных Труб
          </Text>
          <TextField label="Диаметр НКТ, м"
                     type="text"
                     placeholder="Введите диаметр, м"
                     size={'s'}
                     className={css.input}
                     value={data.tubingD}
                     onChange={({value}) => onInputChange('tubingD', value) }
          />
          <TextField label="Глубина спуска НКТ, м"
                     type="text"
                     placeholder="Введите глубину, м"
                     size={'s'}
                     className={css.input}
                     value={data.h_mes}
                     onChange={({value}) => onInputChange('h_mes', value) }
          />

          <Text weight={'regular'} className={`${css.subTitle} ${css.subTitleMargin}`}>
            Данные по флюидам
          </Text>
          <TextField label="Обводненность, %"
                     type="text"
                     placeholder="Введите обводненность, %"
                     size={'s'}
                     className={css.input}
                     value={data.wct}
                     onChange={({value}) => onInputChange('wct', value) }
          />
          <TextField label="Газовый фактор, м3/т"
                     type="text"
                     placeholder="Введите ГФ, м3/т"
                     size={'s'}
                     value={data.rp}
                     onChange={({value}) => onInputChange('rp', value) }
                     className={css.input}/>
          <TextField label="Относительная плотность нефти по воде"
                     type="text"
                     placeholder="Введите плотность"
                     size={'s'}
                     value={data.gamma_oil}
                     onChange={({value}) => onInputChange('gamma_oil', value) }
                     className={css.input}/>
          <TextField label="Относительная плотность газа по воздуху"
                     type="text" placeholder="Введите плотность"
                     size={'s'}
                     value={data.gamma_gas}
                     onChange={({value}) => onInputChange('gamma_gas', value) }
                     className={css.input}/>
          <TextField label="Относительная плотность воды по воде"
                     type="text"
                     placeholder="Введите плотность"
                     size={'s'}
                     value={data.gamma_wat}
                     onChange={({value}) => onInputChange('gamma_wat', value) }
                     className={css.input}/>
          <TextField label="Температура пласта, С"
                     type="text"
                     placeholder="Введите температуру, С"
                     size={'s'}
                     value={data.t_res}
                     onChange={({value}) => onInputChange('t_res', value) }
                     className={css.input}/>
          <TextField label="Давление насыщения, атм"
                     type="text"
                     placeholder="Введите давление, атм"
                     size={'s'}
                     value={data.pb}
                     onChange={({value}) => onInputChange('pb', value) }
                     className={css.input}/>

          <TextField label="Буферное давление, атм"
                     type="text"
                     placeholder="Введите давление, атм"
                     size={'s'}
                     value={data.p_wh}
                     onChange={({value}) => onInputChange('p_wh', value) }
                     className={`${css.input} ${css.subTitleMargin}`}/>
          <TextField label="Геотермический градиент, C/100 м"
                     type="text"
                     placeholder="Введите градиент, C/100 м"
                     size={'s'}
                     value={data.geo_grad}
                     onChange={({value}) => onInputChange('geo_grad', value) }
                     className={css.input}/>
          <TextField label="Глубина верхних дыр перфорации, м"
                     type="text"
                     placeholder="Введите глубину, м"
                     size={'s'}
                     value={data.h_res}
                     onChange={({value}) => onInputChange('h_res', value) }
                     className={css.input}/>
          <TextField label="Пластовое давление, атм"
                     type="text"
                     placeholder="Введите давление, атм"
                     size={'s'}
                     value={data.p_res}
                     onChange={({value}) => onInputChange('p_res', value) }
                     className={css.input}/>
          <TextField label="Коэффициент продуктивности, м3/сут/атм"
                     type="text"
                     placeholder="Введите коэффициент, м3/сут/атм"
                     size={'s'}
                     value={data.pi}
                     onChange={({value}) => onInputChange('pi', value) }
                     className={css.input}/>

        </div>
      </div>
      <div className={`container ${css.subTitleMargin}`}>
        <Button view={'ghost'}
                size={'m'}
                className={css.button}
                label={'Очистить'}
                onClick={onCleanBtnClick}
        />
        <Button view={'primary'}
                size={'m'}
                className={css.button}
                label={'Рассчитать'}
                iconRight={IconPlay}
                onClick={onSendBtnClick}
        />
      </div>
    </div>
  );
};

