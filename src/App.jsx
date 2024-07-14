import React, { useState } from 'react'
import ChatContainer from './components/ChatContainer'
import Sidebar from './components/Sidebar'

const App = () => {
  const [selectedContact, setSelectedContact] = useState(null)
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar selectedContact={setSelectedContact} />
      <ChatContainer contact={selectedContact} />
    </div>
  )
}

export default App