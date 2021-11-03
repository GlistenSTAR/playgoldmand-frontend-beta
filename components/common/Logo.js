import React from 'react'
import Link from './input/Link'
import Image from 'next/image'
import cb from 'classnames'

export default function Logo() {
  return (
    <Link href={'/'} className="opacity-100 p-2">
        <Image
            className={cb('h-20 w-auto z-10')}
            src="/logo.png"
            alt={'logo'}
        />
    </Link>
  )
}