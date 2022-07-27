import React, {useState} from 'react';
import {MainHeader} from './Header';
import { MainFolder } from './MainFolder';
import {Sidebar} from './Sidebar/Sidebar'
import css from './Main.module.css'
import {dataType} from "../utils/utils";
interface Props {

}

export const Main: React.FC<Props> = ({}) => {
  const [data, setData] = useState<dataType>()
  const setCalculatedData = (data: dataType) => setData(data)
  return (
    <div className={css.container}>
      <MainHeader/>
      <div className={`container flex-grow-1 ${css.mainContainer}`}>
        <Sidebar setCalculatedData={setCalculatedData}/>
        {data && <MainFolder data={data}/>}
      </div>
    </div>
  );
};

