import {NavLink} from "react-router-dom";

import "./TabBarList.css"

export default function TabBarList() {
    return (
        <nav className="nav-links">
            <ul className="nav-links">
                <NavLink to="/jobs" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    All Jobs
                </NavLink>
                <NavLink to="/candidates" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    All Candidates
                </NavLink>
                <NavLink to="/approved" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Approved Candidates
                </NavLink>
                <NavLink to="/rejected" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Rejected Candidates
                </NavLink>
                <NavLink to="/interviews" className={({isActive}) => (isActive ? "link-active" : "link")}>
                    Interviews
                </NavLink>
            </ul>
        </nav>
    )
}