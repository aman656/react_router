import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/pages/store';

import './index.css';
import App from './App';
import React from 'react';

ReactDOM.render(<React.StrictMode><BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter></React.StrictMode>, document.getElementById('root'));
