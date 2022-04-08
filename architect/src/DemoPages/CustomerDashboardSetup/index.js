import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS

import AnalyticsDashboard from "./Analytics";
import SalesDashboard from "./Sales";
import CommerceDashboard from "./Commerce";
import CustomerDashboard from "./CRM";
import MinimalDashboard1 from "./Minimal/Variation1";
import MinimalDashboard2 from "./Minimal/Variation2";
import { newproject } from "./newproject";
import { projects } from "./projects";
import { creditsbilligs } from "./creditsbilligs";
import { setting } from "./setting";
import { logout } from "./logout";
import { users } from "./users";
import partners from "./partners";

import CustomerDashboardHelpPage from "./HelpPage";
import CustomerDashboardReportsPage from "./reportsPage";
import CustomerDashboardViewProfileContactPage from "./viewProfileContactPage";
import CustomerDashboardViewProfileDetailsPage from "./viewProfileDetailsPage";
import CustomerDashboardViewProfileSecurityPage from "./viewProfileSecurityPage";
import CustomerDashboardViewProfileOrdersPage from "./viewProfileOrdersPage";
import CustomerDashboardViewProfileBillingPage from "./viewProfileBillingPage";
import CustomerDashboardMyAccountPage from "./myAccountPage";
import CustomerDashboardBillingsPage from "./billingsPage";
import CustomerDashboardAdminPage from "./adminPage";
import CustomerDashboardNewProjectInfoPage from "./newProjectInfoPage";
import CustomerDashboardNewProjectDetailsPage from "./newProjectDetailsPage";

// Layout

import AppHeader from "../../CustomerDashboardApp/AppHeader";
import AppSidebar from "../../CustomerDashboardApp/AppSidebar";
// import AppFooter from "../../CustomerDashboardApp/AppFooter";


// Theme Options
import ThemeOptions from "../../CustomerDashboardApp/ThemeOptions";


const Dashboards = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/analytics`} component={AnalyticsDashboard}/>
          <Route path={`${match.url}/sales`} component={SalesDashboard} />
          <Route path={`${match.url}/commerce`} component={CommerceDashboard} />
          <Route exact path={`${match.url}/customer`} component={CustomerDashboard} />          
          <Route path={`${match.url}/minimal-dashboard-1`} component={MinimalDashboard1}/>
          <Route path={`${match.url}/minimal-dashboard-2`} component={MinimalDashboard2}/>
          <Route path={`${match.url}/newproject`} component={newproject}/>
          <Route path={`${match.url}/projects`} component={projects}/>
          <Route path={`${match.url}/users`} component={users}/>
          <Route path={`${match.url}/creditsbilligs`} component={creditsbilligs}/>
          <Route path={`${match.url}/setting`} component={setting}/>
          <Route path={`${match.url}/logout`} component={logout}/>
          <Route path={`${match.url}/partners`} component={partners}/>
          <Route path={`${match.url}/help`} component={CustomerDashboardHelpPage} />
          <Route path={`${match.url}/reports`} component={CustomerDashboardReportsPage} />  
          <Route path={`${match.url}/view-profile/contact`} component={CustomerDashboardViewProfileContactPage} />
          <Route path={`${match.url}/view-profile/details`} component={CustomerDashboardViewProfileDetailsPage} />
          <Route path={`${match.url}/view-profile/security`} component={CustomerDashboardViewProfileSecurityPage} />
          <Route path={`${match.url}/view-profile/orders`} component={CustomerDashboardViewProfileOrdersPage} />
          <Route path={`${match.url}/view-profile/billing`} component={CustomerDashboardViewProfileBillingPage} />
          <Route path={`${match.url}/my-account`} component={CustomerDashboardMyAccountPage} />   
          <Route path={`${match.url}/billings`} component={CustomerDashboardBillingsPage} /> 
          <Route path={`${match.url}/admin`} component={CustomerDashboardAdminPage} />
          <Route path={`${match.url}/new-project/info`} component={CustomerDashboardNewProjectInfoPage} />          
          <Route path={`${match.url}/new-project/details`} component={CustomerDashboardNewProjectDetailsPage} />          
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
