import React from "react";

import './Candidates.css'
import TabBarList from "../TabBarList/TabBarList";
import candidateService from "../../services/candidate-service";

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
            <h2>All Candidates</h2>
            {candidates
                ? <ul>
                    {
                        candidates.map(candidate => (
                            <div className="card-body">
                                <p className="card-text">{candidate.firstName} </p>
                                <p className="card-text">{candidate.lastName}</p>
                                <p className="card-text">{candidate.email}</p>
                            </div>
                        ))
                    }
                </ul>
                : <div>No candidates in database!</div>
            }
        </div>
    );
}
export default Candidates
