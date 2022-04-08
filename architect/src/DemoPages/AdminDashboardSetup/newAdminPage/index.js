import React, { Component, Fragment } from "react";
// import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

// import PageTitleAlt2 from "../../../AdminDashboardApp/AppMain/PageTitleAlt2";

// Multiple dashboard options
// import Tabs, { /* TabPane //Multiple Dashboard Options */ } from "rc-tabs";
// import TabContent from "rc-tabs/lib/SwipeableTabContent";
// import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
// import CRMDashboard1 from "./Examples/Variation1"; // Dashboard 1
import AdminDashboardNewAdminPage from "./Examples/Variation2";
// import PageTitle from "../Commerce";

export default class AdminDashboardNewAdminPage0 extends Component {
  render() {
    return (
      <Fragment>
        {/* <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitleAlt2 heading="Analytics Dashboard"
            subheading="Yet another dashboard built using only the included Architech elements and components."
            icon="pe-7s-graph icon-gradient bg-ripe-malin"
          /> */}
          {/* 
          
          // Variation display
          <Tabs defaultActiveKey="1"
            renderTabBar={() => <ScrollableInkTabBar />}
            renderTabContent={() => <TabContent />}>
                                    
            <TabPane tab="Variation 1" key="1">
              <CRMDashboard2 />
            </TabPane>
            <TabPane tab="Variation 2" key="2">
              <CRMDashboard1 />
            </TabPane>

            
          </Tabs> */}
          <AdminDashboardNewAdminPage />
        {/* </CSSTransitionGroup> */}
      </Fragment>
    );
  }
}
