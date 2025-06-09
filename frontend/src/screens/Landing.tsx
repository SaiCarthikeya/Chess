import React from 'react'
import bgImg from '../assets/chess-bg.jpeg'

const Landing = () => {
  return (
    <div className="h-screen p-2.5 flex justify-center items-center">
      <img src={bgImg} className='w-2xl m-5.5'/>
      <div className='h-9/12 flex flex-col justify-center items-center'>
        <h1 className="text-cyan-400 text-4xl tracking-wide">Play Chess Online</h1>
        <p className="text-cyan-600">No account required!!!</p>
        <button className="px-3.5 py-1.5 m-7 bg-cyan-300 hover:bg-cyan-700 text-gray-800 rounded-xl">Start</button>
      </div>
    </div>
  )
}

export default Landing
