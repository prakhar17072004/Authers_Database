import React from 'react';
import "../app/globals.css";
import Navbar from '@/components/Navbar';
import AutherList from '@/components/AutherList';
import Dashboard from '@/components/Dashboard';
import Link from 'next/link';

const Index: React.FC = () => {
  return(
    
        <div >
       
       <div className='bg-slate-600 text-center'>
       <Navbar/>
       
       </div>
       <Link href="/home">
       <AutherList/>
       {/* <Dashboard/> */}
       </Link>
       
       
       
        </div>
    
  )
};

export default Index;
