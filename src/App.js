import React from 'react'
import Nav from './components/Nav'
import Heroes from './components/Heroes'
import Card from './components/Card'


import allcards from './allCards'

export default function App() {
  const result = allcards.map(cards => {
    return <Card 
            key={cards.id}
            item={cards}
              />
  })
  return (
    <div className="App">
      <div className="all--components">
        <Nav />
        <Heroes />
        <div className='all--cards'>
          {result}
        </div>
      </div>
    </div>
  );
}
