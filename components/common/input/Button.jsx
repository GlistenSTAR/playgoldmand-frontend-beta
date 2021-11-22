import React from 'react'
import cb from 'classnames'

export default function Button(
  { children, className, disabled, onClick}) {
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