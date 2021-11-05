import React from 'react'
import Link from '../common/input/Link'
import Image from 'next/image'
import cb from 'classnames'

export default function MenuItem(
  { text, href, imageUrl }: {
    text: string,
    href: string,
    imageUrl: string
  }
): JSX.Element {
  return (
    <div className={cb(
      'flex justify-center items-center',
      'w-52 rounded-md',
      'px-5 py-1 border-4 text-white text-lg',
      'bg-mark_button cover bg-inactive_button'
    )}>
      <Link href={href} className="opacity-100 flex items-center">
          <Image 
              src={require(`../../assets/img/svg/${imageUrl}`)}
              width="35"
              height="35"
              alt="menu_icon"
            />
            <div className="ml-1">
              {text}
            </div>
      </Link>
    </div>
  )
}