import React, { useContext, useEffect, useState } from 'react';
import { JobsContext } from '../Layout/Layout';
import { getDataFromLocal } from '../../Utility/LocalStorageFunction';
import JobItem from '../JobItem/JobItem';

const AppliedJobs = () => {
    const [jobs,setJobs]= useState([])
    const jobData=useContext(JobsContext);
    const ids=getDataFromLocal();

    useEffect(()=>{
        const newJobs=[];
        console.log(ids)
        console.log(jobData)
        if(!ids){
            setJobs(newJobs)
        }
        else{
            for(const id of ids){
                const job=jobData.find(jb=> jb.id==id)
                newJobs.push(job);
            }
            setJobs(newJobs)
        }
        
    },[])
    return (
        <div className='container mx-auto'>
            <h1 className='text-6xl text-center my-10'>Applied Jobs</h1>
            {
                jobs.map(job=> <JobItem job={job} ssM={'flex justify-start items-center my-5'} ssAll={'mx-5'} ssG={'grow'} > </JobItem> )
            }
            
        </div>
    );
};

export default AppliedJobs;