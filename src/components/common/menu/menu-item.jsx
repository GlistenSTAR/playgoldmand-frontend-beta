import React, {} from 'react'
import Link from '../input/Link'
import Image from 'next/image'
import cb from 'classnames'
import { useRouter } from 'next/router'

export default function MenuItem(
  { text, href, imageUrl }) {
  
  const router = useRouter();
  const active = router.pathname === href

  return (
    <div className={cb(
      'flex justify-center items-center',
      'w-52 rounded-lg',
      'px-5 py-2 text-lg',
      {'bg-gray-800' : active},
      {'bg-transparent' : !active},
    )}>
      <Link href={href} className="opacity-100 flex items-center" data-toggle="tab">
          <Image 
              src={active? `/img/svg/${imageUrl}_active.png` : `/img/svg/${imageUrl}.png`}
              width="30"
              height="30"
              alt="menu_icon"
            />
            <div className={cb(
              'ml-1',
              {'text-white' : active},
              {'text-primary' : !active},
            )}>
              {text}
            </div>
      </Link>
    </div>
  )
}