import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SmartGrid from './pages/smartGrid';
import Supervisorio from './pages/supervisorio';
import Gerenciamento from './pages/management';
import Solar from './pages/solar';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={SmartGrid} />
            <Route path="/supervisorio" component={Supervisorio} />
            <Route path="/gerenciar" component={Gerenciamento} />
            <Route path="/solar" component={Solar} />
        </BrowserRouter>
    )
}

export default Routes;