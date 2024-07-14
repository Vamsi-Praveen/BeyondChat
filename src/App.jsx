import React from 'react'
import ChatContainer from './components/ChatContainer'
import Sidebar from './components/Sidebar'

const App = () => {
  return (
    <div className='flex h-screen w-screen'>
      <Sidebar />
      <ChatContainer />
    </div>
  )
}

export default App