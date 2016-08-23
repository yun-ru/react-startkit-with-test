import React from 'react';
import {render} from 'react-dom';

import User from './components/Users';
import NoState from './components/NoState';
import WeekBtns from './components/WeekBtns';


render(
    <div>
        <User/>
        <NoState/>
        <WeekBtns/>
    </div>,
    document.getElementById("app")
)
