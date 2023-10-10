import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'

const JobItem = ({job}) => {
    return (
        <div className='border-2 bg-indigo-100 rounded-lg p-10'>
            <img src={job.logo} alt="" />
            <h1>{job.job_title}</h1>
            <h1>{job.company_name}</h1>
            <div className='flex'>
                <button className='bg-white rounded-lg border-2 px-3 py-2 mr-3'>{job.remote_or_onsite}</button>
                <button className='bg-white rounded-lg border-2 px-3 py-2 '>{job.job_type}</button>
            </div>
            <div className='flex'>
                <h1 className='mr-5'> <span><MapPinIcon className="inline h-6 w-6 text-green-500"/></span> {job.location}</h1>
                <h1 className='mr-5'> <span><CurrencyDollarIcon className="inline h-6 w-6 text-yellow-400"/></span> Salary: {job.salary}</h1>
            </div>
            <button className='p-3 border-2 bg-white rounded-lg'>View Details</button>
        </div>
    );
};

export default JobItem;