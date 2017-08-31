import React from 'react';
import {render} from 'react-dom';
import Layout from './components/Layout.js';

require('../styles/main.less');

const experience = document.querySelector('.wineapp');

experience && render(<Layout/>, experience);
