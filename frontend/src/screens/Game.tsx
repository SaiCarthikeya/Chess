import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import Chessboard from '../components/Chessboard'
import  { useSocket } from '../hooks/useSocket'
import { INIT_GAME, MOVE, GAME_OVER } from '../components/Messages'
import { Chess } from 'chess.js'

const Game = () => {
  const socket = useSocket();
  const [chess, setChess] = useState(new Chess());
  const [board, setBoard] = useState(chess.ascii());

  
  useEffect(() => {
    if (!socket) return;
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      switch (message.type) {
        case INIT_GAME:
          setChess(new Chess());
          break;
        case MOVE:
          const move = message.payload 
          chess.move(move);
          setBoard(chess.ascii)
          break;
        case GAME_OVER:
          break;
        }
      }
  }, [socket]);

  if (!socket) return (<div>loading.....</div>);
  return (
    <div className="flex justify-center">
      <div className="pt-8 max-w-screen-lg w-full">
        <div className="grid grid-cols-6 gap-4 w-full">
          <div className="col-span-4 w-full">
            <Chessboard board={board}/>
          </div>
          <div className="col-span-2 w-full">
            <Button onClick={() => {
              socket.send(JSON.stringify({
                type: INIT_GAME,
              }))
            }}>
              Play
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Game
