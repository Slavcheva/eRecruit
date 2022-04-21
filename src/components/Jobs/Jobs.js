import React from "react";

import './Jobs.css'
import TabBarList from "../TabBarList/TabBarList";
import jobService from "../../services/job-service";
import QuickMenu from "../QuickMenu/QuickMenu";

const Jobs = () => {

    const [jobs, setJobs] = React.useState(null);

    React.useEffect(() => {
        jobService.load().then(res => {
            setJobs(res);
        });
    }, []);

    return (
        <div className="jobs-page">
            <TabBarList/>
            <QuickMenu title="Add New Job"/>
            <h2>All Jobs</h2>
            {jobs
                ? <ul>
                    {
                        jobs.map(job => (
                            <div className="cars-header">
                                <h5 className="card-title">{job.title}</h5>
                                <p className="card-text">{job.description}</p>
                            </div>
                        ))
                    }
                </ul>
                : <div>No jobs in database!</div>
            }
        </div>
    );
}

export default Jobs;