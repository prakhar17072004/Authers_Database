jijiimport React, { useEffect, useState } from 'react';
import "../app/globals.css"
import Navbar from '@/components/Navbar';


interface BOOKS {
  id: number;
  auther_id:number;
  books_name: string;
  
}

export default function BooksPage() {
  
  const [books, setBooks] = useState<BOOKS[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  
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
    

fetchBooks();
    
  }, []);

  
  console.log(books);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
 <Navbar/>
  <h1 className="text-center bg-slate-900 text-white">Books List</h1>
  
    
        
        <div>
        <ul className="grid grid-cols-3 gap-4 p-4">
          {books.map((books)=>(
            <li key={books.id} className="border rounded-lg p-4 bg-white shadow-md flex flex-col items-start">
              
              <span className="text-gray-700 flex">Authers_id: {books.auther_id}</span>
              <span className="text-gray-700 flex">Books Name: {books.books_name}</span>
              

            </li>
          ))}
        </ul>
        </div>
        
        
    
  
</div>

  );
}
