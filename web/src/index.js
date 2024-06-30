import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import App from './App';
import 'antd/dist/reset.css';

axios.defaults.baseURL = 'http://127.0.0.1:8081';
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
