import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';

import Videos from "./componentes/videos";
import Play from "./componentes/play";
import Prueba from "./componentes/prueba";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/videos" component={Videos} />
        <Route path="/play" component={Play} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
