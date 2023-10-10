import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';
import JobDetails from './components/JobDetails/JobDetails.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout> ,
    loader: ()=>fetch('jobs.json'),
    children: [
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: ':jobId',
        element: <JobDetails></JobDetails>,
        loader: ({params})=> params.jobId
      },
      {
        path: 'applied',
        element: <AppliedJobs></AppliedJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
