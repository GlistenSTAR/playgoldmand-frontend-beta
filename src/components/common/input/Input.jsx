import React from 'react'
import cb from 'classnames'

export default function Input(
  { type, id, value, className, placeholder, checked, required, disabled, onChange : onChangeCallback}
) {

  const onChange = (e) => {
    onChangeCallback(e)
  }

  return (
    <input
      className={cb(
        'rounded px-3 py-2',
        'focus:outline-none focus-visible:ring-inset',
        'focus-visible:ring-primary',
        'text-neutral',
        { 'cursor-not-allowed': disabled },
        className
      )}
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      checked={checked}
      required={required}
      disabled={disabled}
      onChange={onChange}
    />
  )
}