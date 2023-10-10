import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';

const JobList = () => {
    const [categories,setCategories]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])

    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-6xl mb-5 text-violet-500 text-center'>Job Category List</h1>
            <p className='text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid grid-cols-4 gap-5 mt-4'>
                {
                    categories.map(cd=> <Category key={cd.id} category={cd}></Category> )
                }
            </div>
        </div>
    );
};

export default JobList;