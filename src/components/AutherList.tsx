import React, { useEffect, useState } from 'react';

interface AUTHER {
  id: number;
  auther_name: string;
  email: string;
  bio: string;
}
interface BOOKS {
  id: number;
  auther_id:number;
  books_name: string;
  
}

const AutherList: React.FC = () => {
  const [authers, setAuthers] = useState<AUTHER[]>([]);
  const [books, setBooks] = useState<BOOKS[]>([]);
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
  const fetchBooks = async () => {
    try {
      const response = await fetch('/api/books');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      
      setBooks(data);
      
    } catch (error: any) {
      setError(error.message || 'An error occurred');
      console.error('Error fetching authers:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    
fetchAuthers();
fetchBooks();
    
  }, []);

  console.log(authers);
  console.log(books);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
  <h1 className="text-center bg-slate-950 text-white">Author List</h1>
  <ul className="grid grid-cols-3 gap-5
    p-4">
    {authers.map((author) => (
      <li
        key={author.id}
        className="border rounded-lg p-4 bg-white shadow-md flex flex-col items-start"
      >
        <span className="font-semibold text-slate-600">Authors Name:{author.auther_name}</span>
        <ul>
          {books.filter((books)=>books.auther_id===author.id).map((books)=>(
            <li key={books.id}>
              
              <span className="text-gray-700 flex">Books Written:{books.books_name}</span>

            </li>
          ))}
        </ul>
        
        <span className="text-gray-600"> Authors Eamil:{author.email}</span>
        <span className=" text-slate-950"> Auther Bio:{author.bio}</span>
      </li>
    ))}
  </ul>
</div>

  );
};

export default AutherList;
