import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Calculator from '../components/Calculator';
import Layout from '../containers/Layout';
import Home from '../containers/Home';
import Error404 from '../containers/Error404';
import '../assets/styles/containers/App.scss';


const App = () => (
    <BrowserRouter>
    <Layout>

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/calculator" component={Calculator} />
            <Route component={Error404} />
        </Switch>

    </Layout>
    </BrowserRouter>
);

export default App;