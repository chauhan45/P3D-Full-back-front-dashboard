import React from "react";
import CustomerDashboard from "../DemoPages/customerDashboard"; // Admin Dashboard
import configureStore from "../config/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

export default function CustomerDashComp(){
    return (
        <Provider store={store}>                    
            <CustomerDashboard />                                
        </Provider>
    )                
}