import {Link} from "react-router-dom";
import "./TabBarList.css"

export default function TabBarList() {
    return (
        <nav className="tab-list">
            <ul className="nav-links">
                <Link to="/jobs" className="nav-item">All Jobs</Link>
                <Link to="/candidates" className="nav-item">All Candidates</Link>
                <Link to="/approved" className="nav-item">Approved Candidates</Link>
                <Link to="/rejected" className="nav-item">Rejected Candidates</Link>
                <Link to="/interviews" className="nav-item">Interviews</Link>
            </ul>
        </nav>

    )
}