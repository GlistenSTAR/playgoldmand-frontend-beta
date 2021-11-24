import React from 'react'
import cb from 'classnames'

export default function Input(
<<<<<<< HEAD:components/common/input/Input.jsx
  {
    type, id, value, className, placeholder, checked, required, disabled, onChange : onChangeCallback,
    onKeyPress: onKeyPressCallback,
=======
  { type, id, value, className, placeholder, checked, required, disabled, onChange: onChangeCallback }: {
    type?: string,
    id?: string,
    value?: string,
    className?: string,
    placeholder?: string,
    checked?: boolean,
    required?: boolean,
    disabled?: boolean,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
>>>>>>> 6a7afd9a1bcf43f7cb404a0fc332063faa4db5a0:components/common/input/Input.tsx
  }
) {

  const onChange = (e) => {
    onChangeCallback(e)
  }
  const onKeyPress = (e) => {
    onKeyPressCallback && onKeyPressCallback(e)
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
      onKeyPress={onKeyPress}
    />
  )
}