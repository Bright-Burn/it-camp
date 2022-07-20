import React from 'react';
import {MainHeader} from './Header';
import { MainFolder } from './MainFolder';
import {Sidebar} from './Sidebar'
import css from './Main.module.css'
interface Props {

}
const fakeData = {
  "vlp":{
    "q_liq":[
      0,
      30,
      60,
      90,
      120,
      150
    ],
    "p_wf":[
      200,
      190,
      180,
      175,
      185,
      200
    ]
  },
  "ipr":{
    "q_liq":[
      0,
      30,
      60,
      90,
      120,
      150
    ],
    "p_wf":[
      200,
      180,
      160,
      140,
      120,
      100
    ]
  },
  "nodal":[
    {
      "p_wf":150,
      "q_liq":100
    },
    {
      "p_wf":160,
      "q_liq":90
    }
  ]
}

export const Main: React.FC<Props> = ({}) => {
  return (
    <div className={css.container}>
      <MainHeader/>
      <div className={`container flex-grow-1 ${css.mainContainer}`}>
        <Sidebar/>
        <MainFolder data={fakeData}/>
      </div>
    </div>
  );
};

