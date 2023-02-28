import React from "react";

const JOBS_KEY = 'jobs';

function joblisting() {

    const jobs = JSON.parse(localStorage.getItem(JOBS_KEY)) || [];



    return (
        <>
            <div>
                <h2>Job Listings</h2>
                <ul>
                    {jobs.map((job, index) => (
                        <li key={index}>
                            <h4>Job Title :- {job.title}</h4>
                            <p>Posted Data :- {job.date}</p>
                            <p>Location :- {job.location}</p>
                            <p>Job Discription:- {job.description}</p>
                            <p>Type of Job :- {job.type}</p>
                        </li>
                    ))}
                </ul>
            </div>


        </>
    );
}


export default joblisting;
