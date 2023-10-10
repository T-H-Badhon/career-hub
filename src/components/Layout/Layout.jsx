import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import { createContext } from 'react';
import Footer from '../Footer/Footer';

export const JobsContext = createContext([]);

const Layout = () => {
    const loaderData=useLoaderData();
    const jobs=loaderData;
    

    return (
        <div>
            <Header></Header>
            <JobsContext.Provider value={jobs}>
                <Outlet></Outlet>
            </JobsContext.Provider>
            <Footer></Footer>
        </div>
    );
};

export default Layout;