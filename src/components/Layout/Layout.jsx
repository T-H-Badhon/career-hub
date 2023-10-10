import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import { createContext } from 'react';

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
        </div>
    );
};

export default Layout;