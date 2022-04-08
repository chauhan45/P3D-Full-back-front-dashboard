import React from "react"; // React
import ReactDOM from "react-dom"; // ReactDOM
import { HashRouter } from "react-router-dom"; // Router

import "./polyfills";
import "./assets/base.scss";
import * as serviceWorker from "./serviceWorker";

import AdminDashboard from "./DemoPages/adminDashboard"; // Admin Dashboard
import CustomerDashboard from "./DemoPages/customerDashboard"; // Customer Dashboard
import PartnerDashboard from "./DemoPages/partnerDashboard"; // Partner Dashboard

import configureStore from "./config/configureStore";
import { Provider } from "react-redux";

import Login from "./component/loginPage";

const store = configureStore();

const rootElement = document.getElementById("root"); // Root Element

const renderApp = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>                            
                <Component />            
            </HashRouter> 
        </Provider>,
        rootElement
    );
};

fetch("/backend/architect_dashboard/check/",{
    method:"GET",
    credentials:"include"
}).then((res)=>res.text()).then((data)=>{
    console.log("here");
    if(data==="adminTrue"){
        renderApp(AdminDashboard);                  

        if (module.hot) {
            module.hot.accept("./DemoPages/adminDashboard", () => {
                const NextApp = require("./DemoPages/adminDashboard").default;    
                renderApp(NextApp);
            });
        } 
        serviceWorker.unregister();
    }
    else if(data==="partnerTrue"){
        renderApp(PartnerDashboard);                  

        if (module.hot) {
            module.hot.accept("./DemoPages/partnerDashboard", () => {
                const NextApp = require("./DemoPages/partnerDashboard").default;    
                renderApp(NextApp);
            });
        } 
        serviceWorker.unregister(); 
    }
    else if(data==="customerTrue"){
        renderApp(CustomerDashboard);                  

        if (module.hot) {
            module.hot.accept("./DemoPages/customerDashboard", () => {
                const NextApp = require("./DemoPages/customerDashboard").default;    
                renderApp(NextApp);
            });
        } 
        serviceWorker.unregister();
    }
    else{
        ReactDOM.render(
            <Provider store={store}>
                <HashRouter>                            
                    <Login />
                </HashRouter> 
            </Provider>,
            rootElement
        );    
    }
})