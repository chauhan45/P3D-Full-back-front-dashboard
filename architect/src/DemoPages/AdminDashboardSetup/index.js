import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// DASHBOARDS

import AnalyticsDashboard from "./Analytics";
import SalesDashboard from "./Sales";
import CommerceDashboard from "./Commerce";
import AdminDashboard from "./CRM";
import MinimalDashboard1 from "./Minimal/Variation1";
import MinimalDashboard2 from "./Minimal/Variation2";
import { newproject } from "./newproject";
import { projects } from "./projects";
import { creditsbilligs } from "./creditsbilligs";
import { setting } from "./setting";
import { logout } from "./logout";
import { users } from "./users";
import partners from "./partners";

import AdminDashboardHelpPage from "./HelpPage";
import AdminDashboardNewPartnerPage from "./newPartnerPage";
import AdminDashboardNewAdminPage0 from "./newAdminPage";
import AdminDashboardAllAdminsPage from "./allAdminsPage"
import AdminDashboardAllPartnersPage from "./allPartnersPage";
// import AdminDashboardAllCustomersPage from "./allCustomersPage";
import AdminDashboardNewCustomerPage from "./newCustomerPage";
import AdminDashboardReportsPage from "./reportsPage";
import AdminDashboardViewProfileContactPage from "./viewProfileContactPage";
import AdminDashboardViewProfileSecurityPage from "./viewProfileSecurityPage";
import AdminDashboardPartnerSettingsPage from "./partnerSettingsPage";
import AdminDashboardCustomerSettingsPage from "./customerSettingsPage";
import AdminDashboardCreditsBillingsPage from "./creditsBillingsPage";
import AdminDashboardAllArchivedAdmins from "./allArchivedAdmins";
import AdminDashboardAllArchivedPartners from "./allArchivedPartners";
import AdminDashboardAllArchivedCustomers from "./allArchivedCustomers";
import AdminDashboardDemoRequestsPage from "./demoRequestsPage";
import AdminDashboardNewProjectInfoPage from "./newProjectInfoPage";
import AdminDashboardNewProjectDetailsPage from "./newProjectDetailsPage";
import AdminDashboardAllUnApprovedPartners from "./allUnapprovedPartners";
import AdminDashboardAllUnApprovedCustomers from "./allUnapprovedCustomers"; 


// Layout

import AppHeader from "../../AdminDashboardApp/AppHeader";
import AppSidebar from "../../AdminDashboardApp/AppSidebar";
// import AppFooter from "../../AdminDashboardApp/AppFooter";


// Theme Options
import ThemeOptions from "../../AdminDashboardApp/ThemeOptions";


const Dashboards = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/admin/analytics`} component={AnalyticsDashboard}/>
          <Route path={`${match.url}/sales`} component={SalesDashboard} />
          <Route path={`${match.url}/commerce`} component={CommerceDashboard} />
          <Route path={`${match.url}/admin`} component={AdminDashboard} />
          <Route path={`${match.url}/credits-billings`} component={AdminDashboardCreditsBillingsPage} />                                           
          <Route path={`${match.url}/customer-settings`} component={AdminDashboardCustomerSettingsPage} />                                           
          <Route path={`${match.url}/partner-settings`} component={AdminDashboardPartnerSettingsPage} />                                                                                            
          <Route path={`${match.url}/reports`} component={AdminDashboardReportsPage} />                                           
          {/* <Route path={`${match.url}/admin/all-customers`} component={AdminDashboardAllCustomersPage} />                                            */}
          <Route path={`${match.url}/new-customer`} component={AdminDashboardNewCustomerPage} />                                           
          <Route path={`${match.url}/all-partners`} component={AdminDashboardAllPartnersPage} />                                           
          <Route path={`${match.url}/new-partner`} component={AdminDashboardNewPartnerPage} />                                           
          <Route path={`${match.url}/new-admin`} component={AdminDashboardNewAdminPage0} />
          <Route path={`${match.url}/all-admins`} component={AdminDashboardAllAdminsPage} />                                           
          <Route path={`${match.url}/help`} component={AdminDashboardHelpPage} />                                                            
          <Route path={`${match.url}/minimal-dashboard-1`} component={MinimalDashboard1}/>
          <Route path={`${match.url}/minimal-dashboard-2`} component={MinimalDashboard2}/>
          <Route path={`${match.url}/newproject`} component={newproject}/>
          <Route path={`${match.url}/projects`} component={projects}/>
          <Route path={`${match.url}/all-customers`} component={users}/>
          <Route path={`${match.url}/creditsbilligs`} component={creditsbilligs}/>
          <Route path={`${match.url}/setting`} component={setting}/>
          <Route path={`${match.url}/logout`} component={logout}/>
          <Route path={`${match.url}/partners`} component={partners}/>
          <Route path={`${match.url}/archived-admins`} component={AdminDashboardAllArchivedAdmins}/>
          <Route path={`${match.url}/archived-partners`} component={AdminDashboardAllArchivedPartners}/>
          <Route path={`${match.url}/archived-customers`} component={AdminDashboardAllArchivedCustomers}/>
          <Route path={`${match.url}/demo-requests`} component={AdminDashboardDemoRequestsPage}/>
          <Route path={`${match.url}/view-profile/contact`} component={AdminDashboardViewProfileContactPage} />          
          <Route path={`${match.url}/view-profile/security`} component={AdminDashboardViewProfileSecurityPage} />
          <Route path={`${match.url}/new-project/info`} component={AdminDashboardNewProjectInfoPage} />          
          <Route path={`${match.url}/new-project/details`} component={AdminDashboardNewProjectDetailsPage} />                    
          <Route path={`${match.url}/unapproved/partners`} component={AdminDashboardAllUnApprovedPartners} />          
          <Route path={`${match.url}/unapproved/customers`} component={AdminDashboardAllUnApprovedCustomers} />          
        </div>
        {/* <AppFooter /> */}
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
