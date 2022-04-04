import {Route, Routes} from "react-router-dom";

import "./Main.css";

import Search from "../Search/Search";
import Home from "../Home/Home";
import Jobs from "../Jobs/Jobs";
import Candidates from "../Candidates/Candidates";
import Approved from "../Approved/Approved";
import Rejected from "../Rejected/Rejected";
import Interviews from "../Interviews/Interviews";

export default function Main() {
    return (
        <main>
            <Search/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/jobs" element={<Jobs/>}/>
                <Route path="/candidates" element={<Candidates/>}/>
                <Route path="/interviews" element={<Interviews/>}/>
                <Route path="/approved" element={<Approved/>}/>
                <Route path="/rejected" element={<Rejected/>}/>
            </Routes>
        </main>
    )
}

