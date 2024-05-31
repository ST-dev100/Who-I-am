import { useState } from 'react';
import {BrowserRouter} from 'react-router-dom';
import { Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
  Feedbacks,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas} from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar/>
            <Hero/>
          </div>
          <About/>
          {/* <Experience/> */}
          {/* <Tech/> */}
          <Works/>
          <Feedbacks/>
          <div className='relative z-0'>
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </BrowserRouter>
      </>
  )
}

export default App
