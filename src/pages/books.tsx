import React, { useEffect, useState } from 'react';


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
  <h1 className="text-center bg-slate-900 text-white">Author List</h1>
  
    
        
        <ul>
          {books.filter((books)=>books.auther_id===author.id).map((books)=>(
            <li key={books.id}>
              
              <span className="text-gray-600 flex">Books Written:{books.books_name}</span>

            </li>
          ))}
        </ul>
        
        
    ))
  
</div>

  );
}
