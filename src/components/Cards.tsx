import React from 'react'
import Image from 'next/image'
import pic from "../assets/user.png"

function Cards() {
  return (
    <div className='mt-8'>
        <div className='grid grid-cols-3 max-w-[1250px] ml-[190px] gap-4 rounded-md text-center'>
            <div className='bg-slate-400 rounded-3xl'>
            <div className='m-12 bg-cyan-800 rounded-full text-xl'>
            <Image src={pic} alt ="pic" className=" p-4 mx-auto"/>
            </div>
            <h2>Auther Name:<span>Jai shanker prashad</span></h2>
            <h2>Books Name:<span></span></h2>
            </div>
            <div className='bg-slate-400 rounded-3xl'>
            <div className='m-12 bg-cyan-800 rounded-full text-xl'>
            <Image src={pic} alt ="pic" className=" p-4 mx-auto"/>
            </div>
            <h2>Auther Name:<span>Jai shanker prashad</span></h2>
            <h2>Books Name:<span></span></h2>
            </div>
            <div className='bg-slate-400 rounded-3xl'>
            <div className='m-12 bg-cyan-800 rounded-full text-xl'>
            <Image src={pic} alt ="pic" className=" p-4 mx-auto"/>
            </div>
                <h2>Auther Name:<span>Jai shanker prashad</span></h2>
                <h2>Books Name:<span></span></h2>

            </div>

        </div>
    </div>
  )
}

export default Cards