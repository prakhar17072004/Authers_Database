
import Link from 'next/link'
import React from 'react'


function Navbar() {
  return (
    <div  className='flex justify-between max-w-[1250px] ml-[200px] pt-4 pb-8 '>
        <Link href="/" >
        <div className='font-semibold'>
            <h1>AUTHER.COM</h1>
        </div></Link>
       <div className='flex space-x-12 justify-evenly'>
       <Link href="/home">
       <div className='font-semib hover:underline  cursor-pointer'>
            Home
        </div></Link>
        <Link href="/auther">
        <div className='font-medium hover:underline  cursor-pointer'>
            Authers
        </div>
        </Link>
        <Link href="/books">
        <div className='font-medium hover:underline  cursor-pointer'>
            Books
        </div>
        </Link>
        
        
       </div>
    </div>
  )
}

export default Navbar