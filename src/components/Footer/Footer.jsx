import React from 'react';
import './Footer.css'
import social from '../../assets/icons/social.png'

const Footer = () => {
    return (
        <div className='my-container bg-black text-white flex justify-center items-center'>
            <div className='container my-auto mx-auto'>
                <div className='grid grid-cols-6 gap-3'>
                    <div className='col-span-2 mb-8'>
                        <h1 className='text-4xl mb-5'>Career Hub</h1>
                        <p className='mb-3'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <img className='mb-3 mt-4' src={social} alt="" />
                    </div>
                    <div className='col-span-1 mb-8'>
                        <h1 className='text-3xl mb-5'>Company</h1>
                        <p className='text-2xl mb-3'>About</p>
                        <p className='text-2xl mb-3'>Works</p>
                        <p className='text-2xl mb-3'>Latest News</p>
                        <p className='text-2xl mb-3'>Career</p>
                    </div>
                    <div className='col-span-1 mb-8'>
                        <h1 className='text-3xl mb-5'>Product</h1>
                        <p className='text-2xl mb-3'>Prototype</p>
                        <p className='text-2xl mb-3'>Plans & Pricing</p>
                        <p className='text-2xl mb-3'>Customers</p>
                        <p className='text-2xl mb-3'>Integrations</p>
                    </div>
                    <div className='col-span-1 mb-8'>
                        <h1 className='text-3xl mb-5'>Support</h1>
                        <p className='text-2xl mb-3'>Help Desk</p>
                        <p className='text-2xl mb-3'>Sales</p>
                        <p className='text-2xl mb-3'>Become a partner</p>
                        <p className='text-2xl mb-3'>Developer</p>
                    </div>
                    <div className='col-span-1 mb-8'>
                        <h1 className='text-3xl mb-5'>contact</h1>
                        <p className='text-2xl mb-3'>524 Broadway , NYC</p>
                        <p className='text-2xl mb-3'>+1 777 - 978 - 5570</p>
                    </div>
                </div>
                <h1 className='border-b-2 w-100 border-white'></h1>
                <div className='flex justify-between mt-10'>
                    <h1>@2023 CareerHub. All Rights Reserved</h1>
                    <h1>Powered by CareerHub</h1>
                </div>

            </div>
            

        </div>
    );
};

export default Footer;