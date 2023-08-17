import React from 'react'
import { GetCourses } from '@/types/global'
import Image from 'next/image'

export default async function Page({ posts }) {

    return (
        <div className='flex-1 grid grid-cols-2 overflow-auto py-[10px] my-[10px]'>
            {
                posts.courses.map(item => {
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

export async function getStaticProps() {
    const res = await fetch('https://dev-balanzuniversity-api.balpays.com/courses')
    const posts = await res.json()
    console.log(posts)
    return {
        props: {
            posts,
        }
    }
}
