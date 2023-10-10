import React, { useContext } from 'react';
import user from '../../assets/images/user.png'
import JobList from '../JobList/JobList';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import { JobsContext } from '../Layout/Layout';

const Home = () => {
    return (
        <div>
            <div className='container mx-auto flex justify-between items-center mb-10'>
                <div>
                    <div className='mb-5'>
                        <h1 className='text-6xl mb-5'>One Step Closer To Your <span className='text-violet-500'>Dream Job</span></h1>
                        <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    </div>
                    <button className='px-3 py-2 bg-violet-500 rounded-lg text-2xl'>Get Started</button>
                </div>
                <img className='w-50' src={user} alt="" />
            </div>
            <JobList></JobList>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default Home;