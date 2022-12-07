import React from 'react'
import './card.css'
import CardItem from './CardItems'

function Cards() {
  return (
    <div className='cards'>
      <h1>NEW RELEASES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
         
          <ul className='cards__items'>
            <CardItem
              src='https://images.unsplash.com/photo-1620510625142-b45cbb784397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80'
              text='JOKER'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1620510625142-b45cbb784397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1620510625142-b45cbb784397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
            <CardItem
              src='https://images.unsplash.com/photo-1620510625142-b45cbb784397?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1886&q=80'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards
