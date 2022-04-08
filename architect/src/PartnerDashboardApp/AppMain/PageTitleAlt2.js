import React from "react";
import { connect } from "react-redux";
import cx from "classnames";

// import LaddaButton, { ZOOM_IN } from "react-ladda";

// import { Button, UncontrolledTooltip } from "reactstrap"; // Battery icon

import { toast, Slide } from "react-toastify";

// import { faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons"; // Battery icon

import { faHome } from "@fortawesome/free-solid-svg-icons"; // Home icon

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class PageTitleAlt2 extends React.Component {
  state = {
    expZoomIn: false,
  };

  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
    });
  }

  notify22 = () =>
    (this.toastId = toast("You can add whatever element in this section.", {
      transition: Slide,
      closeButton: true,
      autoClose: 5000,
      position: "bottom-center",
      type: "default",
    }));

  render() {
    let {
      // enablePageTitleIcon, // icon
      enablePageTitleSubheading,

      heading,
      // icon,
      // subheading,
    } = this.props;
    return (
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            {/* <div className={cx("page-title-icon rounded-circle", {
                "d-none": !enablePageTitleIcon,
              })}>
              <i className={icon} />
            </div> */}
            <div>
              {heading}
              <div className={cx("page-title-subheading", {
                  "d-none": !enablePageTitleSubheading,
                })}>
                <a href="/dashboards/crm"><FontAwesomeIcon icon={faHome} /> / Dashboards</a>
              </div>
            </div>
          </div>
          <div className="page-title-actions">
            {/* 

            // Battery icon
            <Button className="btn-pill btn-shadow mr-3" onClick={this.notify22} color="success" id="Tooltip-123">
              <FontAwesomeIcon icon={faBatteryThreeQuarters} />
            </Button>
            <UncontrolledTooltip placement="left" target={"Tooltip-123"}>
              A notification example!
            </UncontrolledTooltip> */}
            {/* <LaddaButton className="btn btn-shadow btn-pill btn-wide btn-focus mr-4" loading={this.state.expZoomIn}
              onClick={() => this.toggle("expZoomIn")} data-style={ZOOM_IN}>
              New Customer
            </LaddaButton> */}
            <Link to="/dashboard/partner/new-customer"><button class="btn btn-primary">New Customer</button></Link>
            {/* <LaddaButton className="btn btn-shadow btn-pill btn-wide btn-focus mr-4" loading={this.state.expZoomIn}
              onClick={() => this.toggle("expZoomIn")} data-style={ZOOM_IN}>
              New Partner
            </LaddaButton> */}
            {/* <button class="btn btn-primary ml-4">New Partner</button> */}
            {/* <LaddaButton className="btn btn-shadow btn-pill btn-wide btn-focus" loading={this.state.expZoomIn}
              onClick={() => this.toggle("expZoomIn")} data-style={ZOOM_IN}>
              New Project
            </LaddaButton> */}
            <Link to="/dashboard/partner/new-project/info"><button class="btn btn-primary ml-4">New Project</button></Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  // enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon, // Icon
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitleAlt2);
