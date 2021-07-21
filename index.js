import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import GenerateQR from './Components/GenerateQR';
import PhotoApp from './Components/CapturePhoto';
import VisitorDetails  from './Components/VisitorDetails';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <VisitorDetails/>,
  document.getElementById('root')
);
ReactDOM.render(
  <GenerateQR/>,
  document.getElementById('root1')
);   
ReactDOM.render(
<PhotoApp/>,
  document.getElementById('root2')
);
reportWebVitals();
