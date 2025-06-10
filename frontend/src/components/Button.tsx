import React from 'react'

const Button = ({onClick, children} : {onClick: () => void, children : React.ReactNode}) => {
  return (
    <button onClick={onClick} className="px-3.5 py-1.5 m-7 bg-cyan-300 hover:bg-cyan-600 text-gray-800 rounded-xl transition-transform duration-300 transform hover:text-gray-300 hover:scale-120">
        {children}
    </button>
  )
}

export default Button
