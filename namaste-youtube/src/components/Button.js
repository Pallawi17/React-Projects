import React from 'react'

const Button = ({name}) => {
  return (
    <div>
      <button className="p-2 m-2 bg-black text-white">{name}</button>
    </div>
  )
}

export default Button
