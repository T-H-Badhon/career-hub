import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/CareerHub.png'

const Header = () => {
    return (
        <div className='bg-indigo-300 rounded-lg'>
            <div className='container mx-auto flex justify-between items-center px-7  py-5 text-white rounded-lg mb-10'>
            <div>
                <Link to='/'><img className='bg-white px-1 py-1 rounded-sm' src={logo} alt="" /></Link>
            </div>
            <nav>
                <Link className='px-2' to='/'>Statistics</Link>
                <Link className='px-2' to='/applied'>Applied Jobs</Link>
                <Link className='px-2' to='/'>Blogs</Link>
            </nav>
            <button className='px-3 py-2 bg-white text-neutral-800 rounded-md'><h1>Start Applying</h1></button>
        </div>
        </div>
    );
};

export default Header;