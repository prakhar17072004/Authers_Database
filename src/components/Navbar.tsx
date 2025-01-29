import { Libre_Barcode_39 } from 'next/font/google'
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
       {/* <Link href="">
       <div className='font-medium hover:underline  cursor-pointer'>
            Home
        </div></Link>
        <div className='font-medium hover:underline  cursor-pointer'>
            Authers
        </div>
        <div className='font-medium hover:underline  cursor-pointer'>
            Books
        </div> */}
       </div>
    </div>
  )
}

export default Navbar