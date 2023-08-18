import React from 'react'
import { GetCourses } from '@/types/global'

export const dynamic = 'auto'

async function getData() {
    const res = await fetch('https://dev-balanzuniversity-api.balpays.com/courses', { next: { revalidate: 5 } })
    return await res.json()
}

export default async function Page() {

    let data: GetCourses = await getData()

    return (
        <div className='flex-1 grid grid-cols-2 overflow-auto py-[10px] my-[10px]'>
            {
                data.courses.map(item => {
                    return <div key={item.id} className='border-blue_balanz border-[1px] m-[20px] flex rounded-[30px] p-[20px]'>
                        <div className='px-[20px]'>
                            <div className='text-gray_letter_footer font-[700]'>{item.name}</div>
                            <div>{item.detail}</div>
                        </div>
                        <img src={item.image} alt={item.name} className='rounded-[20px]' />
                    </div>
                })
            }
        </div>
    )
}