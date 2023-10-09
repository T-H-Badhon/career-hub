import React from 'react';


const Category = ({category}) => {
    console.log(category)

    return (
        <div className='p-10 bg-violet-100 rounded-lg'>
            <img className='mb-4' src={category.logo} alt="" />
            <h1 className='text-2xl'>{category.category_name}</h1>
            <p>{category.availability}</p>            
        </div>
    );
};

export default Category;