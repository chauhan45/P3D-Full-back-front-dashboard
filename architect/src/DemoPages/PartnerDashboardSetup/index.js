import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS

import AnalyticsDashboard from "./Analytics";
import SalesDashboard from "./Sales";
import CommerceDashboard from "./Commerce";
import PartnerDashboard from "./CRM";
import MinimalDashboard1 from "./Minimal/Variation1";
import MinimalDashboard2 from "./Minimal/Variation2";
import { newproject } from "./newproject";
import { projects } from "./projects";
import { creditsbilligs } from "./creditsbilligs";
import { setting } from "./setting";
import { logout } from "./logout";
import { users } from "./users";
import partners from "./partners";

import PartnerDashboardHelpPage from "./HelpPage";
import PartnerDashboardNewCustomerPage from "./newCustomerPage";
// import PartnerDashboardAllCustomersPage from "./allCustomersPage";
import PartnerDashboardReportsPage from "./reportsPage";
import PartnerDashboardMyAccountPage from "./myAccountPage";
import PartnerDashboardBillingsPage from "./billingsPage";
import PartnerDashboardAdminPage from "./adminPage";
import PartnerDashboardViewProfileContactPage from "./viewProfileContactPage";
import PartnerDashboardViewProfileDetailsPage from "./viewProfileDetailsPage";
import PartnerDashboardViewProfileSecurityPage from "./viewProfileSecurityPage";
import PartnerDashboardViewProfileOrdersPage from "./viewProfileOrdersPage";
import PartnerDashboardViewProfileBillingPage from "./viewProfileBillingPage";
import PartnerDashboardNewProjectInfoPage from "./newProjectInfoPage";
import PartnerDashboardNewProjectDetailsPage from "./newProjectDetailsPage";

// Layout

import AppHeader from "../../PartnerDashboardApp/AppHeader";
import AppSidebar from "../../PartnerDashboardApp/AppSidebar";
// import AppFooter from "../../PartnerDashboardApp/AppFooter";


// Theme Options
import ThemeOptions from "../../PartnerDashboardApp/ThemeOptions";


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
          <Route exact path={`${match.url}/partner`} component={PartnerDashboard} />  
          {/* <Route path={`${match.url}/partner/all-customers`} component={PartnerDashboardAllCustomersPage} />                                            */}
          <Route path={`${match.url}/partner/new-customer`} component={PartnerDashboardNewCustomerPage} />                                                             
          <Route path={`${match.url}/partner/reports`} component={PartnerDashboardReportsPage} />            
          <Route path={`${match.url}/partner/my-account`} component={PartnerDashboardMyAccountPage} />   
          <Route path={`${match.url}/partner/billings`} component={PartnerDashboardBillingsPage} /> 
          <Route path={`${match.url}/partner/admin`} component={PartnerDashboardAdminPage} /> 
          <Route path={`${match.url}/minimal-dashboard-1`} component={MinimalDashboard1}/>
          <Route path={`${match.url}/minimal-dashboard-2`} component={MinimalDashboard2}/>
          <Route path={`${match.url}/newproject`} component={newproject}/>
          <Route path={`${match.url}/projects`} component={projects}/>
          <Route path={`${match.url}/partner/all-customers`} component={users}/>  
          <Route path={`${match.url}/creditsbilligs`} component={creditsbilligs}/>
          <Route path={`${match.url}/setting`} component={setting}/>
          <Route path={`${match.url}/logout`} component={logout}/>
          <Route path={`${match.url}/partners`} component={partners}/>
          <Route path={`${match.url}/partner/help`} component={PartnerDashboardHelpPage} />                   
          <Route path={`${match.url}/partner/view-profile/contact`} component={PartnerDashboardViewProfileContactPage} />
          <Route path={`${match.url}/partner/view-profile/details`} component={PartnerDashboardViewProfileDetailsPage} />
          <Route path={`${match.url}/partner/view-profile/security`} component={PartnerDashboardViewProfileSecurityPage} />
          <Route path={`${match.url}/partner/view-profile/orders`} component={PartnerDashboardViewProfileOrdersPage} />
          <Route path={`${match.url}/partner/view-profile/billing`} component={PartnerDashboardViewProfileBillingPage} />
          <Route path={`${match.url}/partner/new-project/info`} component={PartnerDashboardNewProjectInfoPage} />          
          <Route path={`${match.url}/partner/new-project/details`} component={PartnerDashboardNewProjectDetailsPage} />          
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
