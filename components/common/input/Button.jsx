import React from 'react'
import cb from 'classnames'

export default function Button(
<<<<<<< HEAD:components/common/input/Button.jsx
  { children, className, disabled, onClick}) {
=======
  { children, className, disabled, onClick }: {
    children: JSX.Element | JSX.Element[] | string,
    className?: string,
    disabled?: boolean,
    onClick: MouseEventHandler
  }
): JSX.Element {
>>>>>>> 6a7afd9a1bcf43f7cb404a0fc332063faa4db5a0:components/common/input/Button.tsx
  return (
    <button
      className={cb(
        'focus:outline-none focus-visible:ring-1 focus-visible:ring-inset',
        'focus-visible:ring-primary',
        'transition-opacity duration-200',
        'opacity-85 hover:opacity-100',
        'cursor-pointer',
        { 'cursor-not-allowed': disabled },
        className
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}