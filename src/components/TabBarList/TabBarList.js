import {Link} from "react-router-dom";
import "./TabBarList.css"

export default function TabBarList() {
    return (
        <div className="tab-list">
            <ul className="nav nav-tabs">
                <Link to="#" className="nav-item">All Jobs</Link>
                <Link to="#" className="nav-item">All Candidates</Link>
                <Link to="#" className="nav-item">Approved Candidates</Link>
                <Link to="#" className="nav-item">Rejected Candidates</Link>
                <Link to="#" className="nav-item">Interviews</Link>
                {/*<Link to="#" className="nav-item" ng-repeat="tab in $tabListBarCtrl.tabs" ng-class="{active: tab._id === $tabListBarCtrl.selectedTabId}" >*/}
                {/*    <span>My Advertisers</span>*/}
                {/*    <span className="pin-button" ng-click="tab.isPinned() ? tab.unpinTab() : tab.pinTab()">*/}
                {/*    <i className="pinned-tabs glyphicon icon-pushpin-down" ng-class="{pinned: tab.isPinned()}"/>*/}
                {/*    </span>*/}
                {/*</Link>*/}
            </ul>
        </div>
        // <div className="tab-list">
        //     <ul className="nav-tabs">
        //         <Link>nfakjsnfqkjwnvkja</Link>
        //
        //       {/*<Link className="uib-tab nav-item active" ng-repeat="tab in $tabListBarCtrl.tabs" ng-class="{active: tab._id === $tabListBarCtrl.selectedTabId}" style="">*/}
        //       {/*      /!*<a className="nav-link" ng-click="$tabListBarCtrl.selectTabById({tabId: tab._id, tabType: tab.tabType})">*!/*/}
        //       {/*      <span>My Advertisers</span>*/}
        //       {/*  /!*</a>*!/*/}
        //       {/*      <span className="pin-button" ng-click="tab.isPinned() ? tab.unpinTab() : tab.pinTab()">*/}
        //       {/*      <i className="pinned-tabs glyphicon icon-pushpin-down" ng-class="{pinned: tab.isPinned()}"/> </span>*/}
        //       {/*  </Link>*/}
        //       {/*<Link className="uib-tab nav-item active" ng-repeat="tab in $tabListBarCtrl.tabs" ng-class="{active: tab._id === $tabListBarCtrl.selectedTabId}" style="">*/}
        //       {/*      /!*<a className="nav-link" ng-click="$tabListBarCtrl.selectTabById({tabId: tab._id, tabType: tab.tabType})">*!/*/}
        //       {/*      <span>My Advertisers</span>*/}
        //       {/*  /!*</a>*!/*/}
        //       {/*      <span className="pin-button" ng-click="tab.isPinned() ? tab.unpinTab() : tab.pinTab()">*/}
        //       {/*      <i className="pinned-tabs glyphicon icon-pushpin-down" ng-class="{pinned: tab.isPinned()}"/> </span>*/}
        //       {/*  </Link>*/}
        //       {/*<Link className="uib-tab nav-item active" ng-repeat="tab in $tabListBarCtrl.tabs" ng-class="{active: tab._id === $tabListBarCtrl.selectedTabId}" style="">*/}
        //       {/*      /!*<a className="nav-link" ng-click="$tabListBarCtrl.selectTabById({tabId: tab._id, tabType: tab.tabType})">*!/*/}
        //       {/*      <span>My Advertisers</span>*/}
        //       {/*  /!*</a>*!/*/}
        //       {/*      <span className="pin-button" ng-click="tab.isPinned() ? tab.unpinTab() : tab.pinTab()">*/}
        //       {/*      <i className="pinned-tabs glyphicon icon-pushpin-down" ng-class="{pinned: tab.isPinned()}"/> </span>*/}
        //       {/*  </Link>*/}
        //
        //        </ul>
        // </div>
    )
}