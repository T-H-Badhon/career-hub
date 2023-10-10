import React, { useContext } from 'react';
import { JobsContext } from '../Layout/Layout';
import JobItem from '../JobItem/JobItem';

const FeaturedJob = () => {
    const jobs=useContext(JobsContext);
    console.log(jobs)
    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-6xl text-violet-500 text-center my-10'>Featured Job</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-2 gap-4 mt-10'>
                {
                    jobs.map(job=> <JobItem key={job.id} job={job}></JobItem> )
                }
            </div>
            <h1 className='text-center mt-10'><button className='px-3 py-2 bg-indigo-100 rounded-lg'>Show All</button></h1>
        </div>
    );
};

export default FeaturedJob;