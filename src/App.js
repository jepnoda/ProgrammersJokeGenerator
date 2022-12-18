import React from 'react'
import Covid from './components/Covid'
import Header from './components/Header'
import Joke from './components/Joke'

const App = () => {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-1 gap-3 mt-3 justify-items-center'>
        <Covid />
        <Joke />
      </div>
    </div>
  )
}

export default App