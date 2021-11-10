import React, { MouseEventHandler } from 'react'
import Image from 'next/image'
import Button from './input/Button'
import cb from 'classnames'

export default function ScrollUpIcon(
  { className, onClick}) {
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