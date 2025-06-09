import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Landing from './screens/Landing'
import Game from './screens/Game'

function App() {

  return (
    <div className="min-h-screen bg-gray-900 p-2.5">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/game' element={<Game/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
