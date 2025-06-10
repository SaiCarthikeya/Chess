import React from 'react'
import bgImg from '../assets/chess-bg.jpeg'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button';

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen p-2.5 flex justify-center items-center">
      <img src={bgImg} className='w-2xl m-5.5'/>
      <div className='h-9/12 flex flex-col justify-center items-center'>
        <h1 className="text-cyan-200 text-4xl tracking-wide">Play Chess Online</h1>
        <p className="text-cyan-600">No account required!!!</p>
        <Button onClick={() => navigate("/game")}>Start</Button>
      </div>
    </div>
  )
}

export default Landing
