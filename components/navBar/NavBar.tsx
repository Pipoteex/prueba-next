"use client"

import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const itemList = [
    {
        name: "Cursos disponibles",
        value: "/cursos_disponibles"
    },
    {
        name: "Mis cursos",
        value: "/mis_cursos"
    },
    {
        name: "Materiales",
        value: "/materiales"
    },
    {
        name: "Foro",
        value: "/foro"
    },
    {
        name: "Certificados",
        value: "/certificados"
    }
]

export const NavBar = () => {

    const pathname = usePathname()

    return (
        <div className='flex w-[100%] px-[20px] justify-center mt-[2%]'>
            {
                itemList.map(item => {

                    let isActive = pathname === item.value

                    return <Link
                        key={item.value}
                        href={item.value}
                        className={
                            `mx-[10px] p-[10px] cursor-pointer rounded-[30px] border-[1px] min-w-[200px] text-center
                            ${isActive ? "bg-blue_balanz text-[white]" : "border-blue_balanz"}`
                        }
                        prefetch={true}
                    >
                        {item.name}
                    </Link>
                })
            }
        </div>
    )
}
