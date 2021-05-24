import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Calculator from '../containers/Calculator';
import Layout from '../containers/Layout';
import Login from '../containers/Login';
import Error404 from '../containers/Error404';
import '../assets/styles/containers/App.scss';


const App = () => (
    <BrowserRouter>
    <Layout>

        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/calculator" component={Calculator} />
            <Route component={Error404} />
        </Switch>

    </Layout>
    </BrowserRouter>
);

export default App;