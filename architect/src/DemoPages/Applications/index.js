import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// APPLICATIONS

import Mailbox from "./Mailbox/";
import Chat from "./Chat/";
// import SplitLayout from "./SplitLayout/";
import FaqSection from "./FaqSection/";

// Layout

import AppHeader from "../../AdminDashboardApp/AppHeader";
import AppSidebar from "../../AdminDashboardApp/AppSidebar";
import AppFooter from "../../AdminDashboardApp/AppFooter";

// Theme Options
import ThemeOptions from "../../AdminDashboardApp/ThemeOptions";

const Applications = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner p-0">
          <Route path={`${match.url}/mailbox`} component={Mailbox} />
          <Route path={`${match.url}/chat`} component={Chat} />
          {/* <Route path={`${match.url}/split-layout`} component={SplitLayout} /> */}
          <Route path={`${match.url}/faq-section`} component={FaqSection} />
        </div>
        <div className="app-wrapper-footer">
          <AppFooter />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Applications;
