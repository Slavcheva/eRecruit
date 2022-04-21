import React from "react";
import {Link} from "react-router-dom";
import './Candidates1.css'
import TabBarList from "../TabBarList/TabBarList";
import candidateService from "../../services/candidate-service";
import QuickMenu from "../QuickMenu/QuickMenu";

const Candidates = ({firstName, lastName, email, bookedInterviews}) => {

    const [candidates, setCandidates] = React.useState(null);

    React.useEffect(() => {
        candidateService.load().then(res => {
            setCandidates(res);
        });
    }, []);

    return (
        <div className="candidates">
            <TabBarList/>
            <QuickMenu title="Add Candidate"/>
            <h2>All Candidates</h2>
            {candidates
                ?
                <ul className="table">
                    <thead className="table-header">
                    <tr>
                        <th className="col col-1">Name</th>
                        <th className="col col-2">Email</th>
                        <th className="col col-3">Status</th>
                        <th className="col col-4">Booked Interview</th>
                        {/*<th className="col col-5"> Interview</th>*/}
                    </tr>
                    </thead>
                    {
                        candidates.map(candidate => (
                            <tbody className="table-body">
                            <tr key={candidate._id}>
                                <td className="col col-1" data-label="Name"><Link
                                    to='/'>{candidate.firstName + " " + candidate.lastName}</Link></td>
                                <td className="col col-2" data-label="Email">{candidate.email}</td>
                                <td className="col col-3" data-label="Status">{candidate.status}</td>
                                <td className="col col-4" data-label="Booked Interview">{candidate.bookedInterview}</td>
                            </tr>
                            </tbody>
                        ))
                    }
                </ul>

                : <div>No candidates in database!</div>
            }
        </div>
    );
}
export default Candidates
