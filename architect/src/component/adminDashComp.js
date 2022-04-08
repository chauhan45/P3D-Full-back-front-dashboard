import React from "react";
import AdminDashboard from "../DemoPages/adminDashboard"; // Admin Dashboard
import configureStore from "../config/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

export default function AdminDashComp(){
    return (
        <Provider store={store}>                    
            <AdminDashboard />                                
        </Provider>
    )                
}