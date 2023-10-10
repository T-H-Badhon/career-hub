import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const JobItem = ({job,ssM,ssAll,ssG}) => {
    console.log(ssM)
    console.log(job)
    return (
        <div className={`border-2 bg-indigo-50 rounded-lg p-10 ${ssM}`}>
            <img className={`mb-5 ${ssAll}`} src={job.logo} alt="" />
            <div className={`mb-5 ${ssAll} ${ssG}`}>
                <h1 className='text-4xl mb-2'>{job.job_title}</h1>
                <h1 className='text-2xl mb-2'>{job.company_name}</h1>
                <div className='flex '>
                    <button className='bg-white text-indigo-500 border-indigo-100 rounded-lg border-2 px-3 py-2 mr-3'>{job.remote_or_onsite}</button>
                    <button className='bg-white text-indigo-500 border-indigo-100 rounded-lg border-2 px-3 py-2 '>{job.job_type}</button>
                </div>
                <div className='flex my-4'>
                    <h1 className='mr-5'> <span><MapPinIcon className="inline h-6 w-6 text-green-500"/></span> {job.location}</h1>
                    <h1 className='mr-5'> <span><CurrencyDollarIcon className="inline h-6 w-6 text-yellow-400"/></span> Salary: {job.salary}</h1>
                </div>
            </div>
            <Link to={`/${job.id}`}><button className='p-3 border-2 bg-indigo-300 rounded-lg text-white'>View Details</button></Link>
        </div>
    );
};

export default JobItem;