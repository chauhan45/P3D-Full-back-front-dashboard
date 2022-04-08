import React from "react";
import PartnerDashboard from "../DemoPages/partnerDashboard"; // Admin Dashboard
import configureStore from "../config/configureStore";
import { Provider } from "react-redux";

const store = configureStore();

export default function PartnerDashComp(){
    return (
        <Provider store={store}>                    
            <PartnerDashboard />                                
        </Provider>
    )        
}

// const renderApp = (Component) => {
    //     ReactDOM.render(
    //         <Provider store={store}>
    //             <BrowserRouter>
    //                 <Route path="/">                
    //                     <AdminDashboard />            
    //                 </Route>                                                                             
    //             </BrowserRouter> 
    //         </Provider>,
    //         rootElement
    //     );
    // };

    // renderApp(AdminDashboard);

    // if (module.hot) {
    //     module.hot.accept("./DemoPages/adminDashboard", () => {
    //         const NextApp = require("./DemoPages/adminDashboard").default;    
    //         renderApp(NextApp);
    //     });
    // } 
    // serviceWorker.unregister();    