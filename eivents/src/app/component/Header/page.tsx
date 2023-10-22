import React from 'react'
import Image from 'next/image'
import EiventLogo from '../../assets/EiventLogo.png'

const Header = () => {
  return (
    <div className='flex justify-between py-7'>
        <div>
        <Image src={EiventLogo} className="" alt="EiventLogo" 
            //   width={100}
            //   height={24}
            //   priority
            />
        </div>
         
         <div>
            <ul className='flex justify-center items-center text-white gap-5'>
                <li>About</li>
                <li>Speaker</li>
                <li>Schedule</li>

                <button className="flex items-center gap-5 text-white p-2 bg-[#92298d]">
          <span className="border border-l-white h-[1rem]"></span>
          Buy tickets
          <span className="border border-l-white h-[1rem]"></span>
        </button>
            </ul>

         </div>
    </div>
  )
}

export default Header