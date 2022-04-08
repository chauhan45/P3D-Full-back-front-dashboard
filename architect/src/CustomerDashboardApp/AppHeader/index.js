import React, { Fragment } from "react";
import cx from "classnames";

import { connect } from "react-redux";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import HeaderLogo from "../AppLogo";

// import SearchBox from "./Components/SearchBox";
// import MegaMenu from "./Components/MegaMenu"; // MegaMenu
import UserBox from "./Components/UserBox";
// import HeaderRightDrawer from "./Components/HeaderRightDrawer"; // Calendar and Dropdown

import HeaderDots from "./Components/HeaderDots";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"; // Home icon

// External stylesheet
import "./index.css";

class Header extends React.Component {
  render() {
    let {
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = this.props;
    return (
      <Fragment>
        <CSSTransitionGroup component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow,
          })}
          transitionName="HeaderAnimation" transitionAppear={true} transitionAppearTimeout={1500}
          transitionEnter={false} transitionLeave={false}>
          <HeaderLogo />
          <div className={cx("app-header__content", {
              "header-mobile-open": enableMobileMenuSmall,
            })}>
            <div className="app-header-left">                            
              {/* <SearchBox />               */}
              <div className="help_div">
                <FontAwesomeIcon className="help_icon" icon={faQuestionCircle} />
                <a href="/dashboard/admin/help"><p id="nav-help">Help</p></a>
              </div>
              {/* <MegaMenu /> // Mega Menu option on left of navbar*/}
            </div>
            <div className="app-header-right">
              <HeaderDots/>
              <UserBox />
              {/* <HeaderRightDrawer /> // Calendar and Dropdown */}
            </div>
          </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
