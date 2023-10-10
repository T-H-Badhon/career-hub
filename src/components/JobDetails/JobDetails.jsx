import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { JobsContext } from '../Layout/Layout';
import { CurrencyDollarIcon, MapPinIcon,IdentificationIcon, PhoneIcon, EnvelopeIcon, MapIcon } from '@heroicons/react/24/solid'
import { setDataToLocal } from '../../Utility/LocalStorageFunction';

const JobDetails = () => {
    const id=useLoaderData();
    const jobs=useContext(JobsContext)

    const [job,setJob]= useState({});
    useEffect(()=>{
        const newJob=jobs.find(jb=>jb.id==id)
        setJob(newJob)
    },[id,jobs])

    const addToApplied=(id)=>{
        setDataToLocal(id);
    }

    return (
        <div className='container mx-auto mb-20'>
            <h1 className='text-center text-6xl mb-10'>Job Details</h1>
            <div className='grid grid-cols-6 gap-5 mx-5'>
                <div className='col-span-4'>
                    <h1 className='text-xl mb-10'><span className='text-3xl font-bold'>Job Description:</span>{job?.job_description}</h1>
                    <h1 className='text-xl mb-10'><span className='text-3xl font-bold'>Job Responsibility:</span>{job?.job_responsibility}</h1>
                    <div className='mb-10'>
                        <h1 className='text-3xl font-bold'>Educational Requirement:</h1>
                        <p className='text-xl'>{job?.educational_requirements}</p>
                    </div>
                    <div className='mb-10'>
                        <h1 className='text-3xl font-bold'>Experience:</h1>
                        <p className='text-xl'>{job?.experiences}</p>
                    </div>
                </div>
                <div className='col-span-2 border-2 bg-indigo-50 rounded-lg p-5'>
                    <div>
                        <h1 className='text-3xl mb-2'>Job Details</h1>
                        <h1 className='border-b-2 border-indigo-300 my-5'></h1>
                        <h1 className='mr-5 my-5'> <span><CurrencyDollarIcon className="inline h-6 w-6 text-yellow-400"/></span> Salary: {job?.salary}</h1>
                        <h1 className='mr-5 mb-10'> <span><IdentificationIcon className="inline h-6 w-6 text-black-400"/></span> Job Title: {job?.job_title}</h1>
                        <h1>Contact Information</h1>
                        <h1 className='border-b-2 border-indigo-300 my-5'></h1>
                        <h1 className='mr-5 mb-10'> <span><PhoneIcon className="inline h-6 w-6 text-black-400"/></span> Phone: {job?.contact_information?.phone}</h1>
                        <h1 className='mr-5 mb-10'> <span><EnvelopeIcon className="inline h-6 w-6 text-black-400"/></span> Email: {job?.contact_information?.email}</h1>
                        <h1 className='mr-5 mb-10'> <span><MapIcon className="inline h-6 w-6 text-black-400"/></span> Address: {job?.contact_information?.address}</h1>
                    </div>
                    <button className='px-3 py-2 bg-indigo-300 rounded-lg' onClick={()=>addToApplied(job?.id)}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;