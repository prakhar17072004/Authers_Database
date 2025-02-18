import React, { useEffect, useState } from 'react';
import "../app/globals.css";
import Navbar from '@/components/Navbar';
interface AUTHER {
  id: number;
  auther_name: string;
  email: string;
  bio: string;
}


export default function Authers()  {
        const [authers, setAuthers] = useState<AUTHER[]>([]);
        
        const [loading, setLoading] = useState(true);
        const [error, setError] = useState<string | null>(null);
      
        const fetchAuthers = async () => {
          try {
            const response = await fetch('/api/authers');
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            
            setAuthers(data);
            
          } catch (error: any) {
            setError(error.message || 'An error occurred');
            console.error('Error fetching authers:', error);
          } finally {
            setLoading(false);
          }
        };
        
        useEffect(() => {
          
      fetchAuthers();
      
          
        }, []);
      
        console.log(authers);
        
        if (loading) {
          return <p>Loading...</p>;
        }
      
        if (error) {
          return <p>Error: {error}</p>;
        }
      
        return (
          <div>
            <Navbar/>
        <h1 className="text-center bg-slate-800 text-white">Author List</h1>
        <ul className="grid grid-cols-3 gap-4 p-4">
          {authers.map((author) => (
            <li
              key={author.id}
              className="border rounded-lg p-4 bg-white shadow-md flex flex-col items-start"
            >
              <span className="font-semibold text-gray-800">Authors Name:{author.auther_name}</span>
              
              
              <span className="text-slate-700"> Authors Email:{author.email}</span>
              <span className=" text-slate-850"> Auther Bio:{author.bio}</span>
            </li>
          ))}
        </ul>
      </div>
      
        );
}
