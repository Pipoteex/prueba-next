import React from 'react'
import Image from 'next/image'

import linkedinImage from './icons/linkedin.svg'
import twitterImage from './icons/twitter.svg'
import instagramImage from './icons/instagram.svg'
import balanzImage from './icons/balanz.svg'
import mailImage from './icons/mail.svg'

let itemList = [
    {
        name: "balanzcapital/",
        image: linkedinImage
    },
    {
        name: "@BalanzCapital",
        image: twitterImage
    },
    {
        name: "balanzcapital",
        image: instagramImage
    },
    {
        name: "balanz.com/",
        image: balanzImage
    },
    {
        name: "university@balanz.com",
        image: mailImage
    }
]

export const Footer = () => {
    return (
        <div>
            <div className='text-blue_balanz text-[20px] bg-gray_footer text-center text-[500] p-[5px]'>
                Educacion financiera para el mundo real
            </div>
            <ul className='flex justify-center items-center p-[20px]'>
                {
                    itemList.map(item => {
                        return <li
                            key={item.name}
                            className='text-gray_letter_footer flex mx-[30px]'
                        >
                            <Image src={item.image} alt={item.name} className='mr-[5px]' />
                            {item.name}
                        </li>
                    })
                }
            </ul>
        </div>
    )
}
