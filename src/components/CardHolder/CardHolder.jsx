import React from 'react'
import mockObject from '../../mockData'
import { useState } from 'react';
import CardList from '../CardList/CardList';

import './CardHolder.css'
const CardHolder = () => {
  return (
    <div>
      <div className="cardHolder">
        <h1 className='cardHolder__header' >
          Самые свежие новости только для ВАС!!!
        </h1>
      </div>
      <div className='card__container'>
        <CardList />
      </div>
    </div>
  )
}
export default CardHolder;

