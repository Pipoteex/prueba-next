import React from 'react'
import Image from 'next/image'

import calendarImage from './icons/calendar.svg'
import bellImage from './icons/bell.svg'
import peopleImage from './icons/people.svg'
import pointsImage from './icons/poins.svg'

export const Header = () => {
    return (
        <div className='bg-gray_header w-[100%] py-[15px] px-[1vw] flex justify-between'>
            <div className='flex flex-col justify-center items-center font-[700]'>
                <div className='text-[37px] text-blue_balanz'>BALANZ</div>
                <div className='text-[25px] text-sky_blue_balanz mt-[-17px]'>UNIVERSITY</div>
            </div>
            <div className='flex justify-center items-center'>
                <Image src={calendarImage} alt='calendar' className='cursor-pointer mx-[10px]' />
                <Image src={bellImage} alt='bell' className='cursor-pointer mx-[10px]' />
                <div className='flex items-end ml-[40px]'>
                    <Image src={peopleImage} alt='user' className='w-[80px]' />
                    <Image src={pointsImage} alt='points' className='cursor-pointer' />
                </div>
            </div>
        </div>
    )
}
