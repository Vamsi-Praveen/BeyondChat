import React, { useState } from 'react'
import ChatContainer from './components/ChatContainer'
import Sidebar from './components/Sidebar'
import MobileChat from './components/MobileChat'

const App = () => {
  const [selectedContact, setSelectedContact] = useState(null)
  const [show, setShow] = useState(false)
  return (
    <div className='flex h-screen w-screen relative'>
      <Sidebar selectedContact={setSelectedContact} setShow={setShow}  />
      <ChatContainer contact={selectedContact} />
      <div>
        <MobileChat setShow={setShow} contact={selectedContact} show={show} />
      </div>
    </div>
  )
}

export default App