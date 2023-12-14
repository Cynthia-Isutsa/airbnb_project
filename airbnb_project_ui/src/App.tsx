import {Route, Routes} from 'react-router-dom'
import Home from "./pages/Home"
import Booking from './pages/Booking'
import Airbnb from './pages/Airbnb'
import Movers from './pages/Movers'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home />}/>
        <Route path='/Booking' element = {<Booking />}/>
        <Route path='/Airbnb' element = {<Airbnb />}/>
        <Route path='/Movers' element = {<Movers />}/>
      </Routes>
    </div>
  )
}

export default App