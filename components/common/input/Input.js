import React from 'react'
import cb from 'classnames'

export default function Input(
  { type, value, className, placeholder, checked, required, disabled, onChange : onChangeCallback}
) {

  const onChange = (e) => {
    onChangeCallback(e)
  }

  return (
    <input
      className={cb(
        'rounded-xl px-3 py-2',
        'focus:outline-none focus-visible:ring-inset',
        'focus-visible:ring-secondary',
        'text-neutral',
        { 'cursor-not-allowed': disabled },
        className
      )}
      type={type}
      value={value}
      placeholder={placeholder}
      checked={checked}
      required={required}
      disabled={disabled}
      onChange={onChange}
    />
  )
}