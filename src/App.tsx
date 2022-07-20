import React from 'react';
import './App.css';
import {presetGpnDefault, Theme} from '@consta/uikit/Theme';
import { Main } from './core/pages';

function App() {
  return (
    <Theme preset={presetGpnDefault}>
      <div className={'App'}>
        <Main/>
      </div>
    </Theme>

  );
}

export default App;
