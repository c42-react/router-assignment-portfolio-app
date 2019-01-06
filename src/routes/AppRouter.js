import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from '../components/ContactPage';
import Header from '../components/Header';
import Home from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import PortfolioList from '../components/PortfolioList';
import PortfolioItem from '../components/PortfolioItem';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path="/portfolio" component={PortfolioList} exact={true}/>
                <Route path="/portfolio/:projectname" component={PortfolioItem} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;