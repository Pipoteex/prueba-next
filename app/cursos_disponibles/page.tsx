import React from 'react'
import { GetCourses } from '@/types/global'
import Image from 'next/image'

async function getData() {
    const res = await fetch("https://dev-balanzuniversity-api.balpays.com/courses", { next: { revalidate: 60 } })
    return res.json()
}

export default async function Page() {

    const data: GetCourses = await getData()

    return (
        <div className='flex-1 grid grid-cols-2 overflow-auto py-[10px] my-[10px]'>
            {
                data.courses.map(item => {
                    return <div key={item.id} className='border-blue_balanz border-[1px] m-[20px] flex rounded-[30px] p-[20px]'>
                        <div className='px-[20px]'>
                            <div className='text-gray_letter_footer font-[700]'>{item.name}</div>
                            <div>{item.detail}</div>
                        </div>
                        <Image src={item.image} alt={item.name} width={400} height={200} className='rounded-[20px]' loading='lazy' />
                    </div>
                })
            }
        </div>
    )
}
