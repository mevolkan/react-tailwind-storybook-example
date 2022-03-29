import React from 'react'

import "./Button.css"

const Button = () => {

  return (

    <button
      className="underline text-3xl text-blue-400 hover:text-blue-200 mt-4"
      href="https://github.com/TheMagoo73/react-tailwind-storybook-example"
      target="_blank"
      rel="noopener noreferrer"
    >
      Text
    </button>
  )
}

export default Button;