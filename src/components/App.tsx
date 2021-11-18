import React from 'react';
import {Route, Switch} from "react-router";
import Layout from "./wrappers/Layout/Layout";
import Header from "./blocks/Header/Header";
import Footer from "./blocks/Footer/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

import '../styles/fonts.scss'
import '../styles/general.scss'
import '../styles/normalize.scss'
import './libs/Glider/glider.min.css';


const App: React.FC = () => {
    return (
        <Layout>
            <Header/>
            <Switch>
                <Route exact path={'/'} component={HomePage}/>
                <Route exact path={'/product'} component={ProductPage}/>
            </Switch>
            <Footer/>
        </Layout>
    );
};

export default App;