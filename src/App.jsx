

import './App.css'
import Body from './components/Body'
import Eventcat from './components/Eventcat'
import Nav from './components/Nav'
import Onlineevent from './components/Onlineevent'

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Nav/>
      <Body/>
      <Eventcat/>
      <Onlineevent/>
    </div>
  )
}

export default App
