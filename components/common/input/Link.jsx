import React from 'react'
import cb from 'classnames'
import NextLink from 'next/link'

export default function Link(
<<<<<<< HEAD:components/common/input/Link.jsx
  { children, className, href, external } 
) {
=======
  { children, className, href, external }: {
    children: JSX.Element | JSX.Element[]
    className?: string,
    href: string,
    external?: boolean
  }
): JSX.Element {
>>>>>>> 6a7afd9a1bcf43f7cb404a0fc332063faa4db5a0:components/common/input/Link.tsx
  const linkClassNames = cb(
    'focus-visible:ring-1 focus-visible:ring-inset',
    'focus-visible:ring-primary',
    'cursor-pointer',
    className
  )
  if (external)
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={linkClassNames}
      >
        {children}
      </a>
    )
  return (
    <NextLink href={href} passHref>
      <a className={linkClassNames}>
        {children}
      </a>
    </NextLink>
  )
}