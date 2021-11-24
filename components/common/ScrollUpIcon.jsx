import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import Button from './input/Button'
import cb from 'classnames'

export default function ScrollUpIcon(
<<<<<<< HEAD:components/common/ScrollUpIcon.jsx
  { className, onClick}) {
=======
  { className, onClick }: {
    className: string,
    onClick: MouseEventHandler
  }
): JSX.Element {
>>>>>>> 6a7afd9a1bcf43f7cb404a0fc332063faa4db5a0:components/common/ScrollUpIcon.tsx
  return (
    <Button
      className={cb(
        "absolute right-14 bottom-10",
        "lg:right-16 lg:bottom-16",
        className
      )}
      onClick={onClick}
    >
      <Image className="w-6 h-6" src="/up-arrow.svg" alt="up" />
    </Button>
  )
}