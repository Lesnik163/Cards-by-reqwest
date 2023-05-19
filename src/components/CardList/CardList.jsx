import React, { useEffect } from 'react'
import {mockObject} from '../../mockData'
import { useState } from 'react';
import './CardList.css';
import {useSelector, useDispatch} from 'react-redux';
import { handleBtnColor, handleQuantityCard, fetchCards } from '../../store/cardSlice';

const CardList = () => {
    const cardList = useSelector(state => state.cards.cardList)
    const dispatch = useDispatch()
    const changeColor = (cardId) => dispatch(handleBtnColor(cardId))
    const changeQuantity = (cardId) => dispatch(handleQuantityCard(cardId))
    
    useEffect(() => {
        if(!cardList.length) {
            console.log('check')
            dispatch(fetchCards())
        }
    }, [dispatch, cardList.length])
    return (
        <>
            {cardList.map(object => {
            return(
                    <div className='card' key={object.id} >
                        <button className='card__linkBtn'><a href={object.url} rel="noopener noreferrer">ПЕРЕЙТИ К ИСТОЧНИКУ</a></button>
                        <h2 className='card_title'>{object.title}</h2>
                        <section className='card__section'>{object.description}</section>
                        <div className='card__picture'>
                            <img src={object.image} alt=''></img>
                        </div>
                        <div className='card__btnContainer'>
                            <button 
                            className={'card__heartBtn' + object.liked && 'card__heartBtn card__heartBtn_red'}
                            onClick={()=>changeColor(object.id)}>{object.liked ? '💓' : '🤍'}</button
                            >
                            <button 
                            className='card__removeBtn'
                            onClick={()=>changeQuantity(object.id)}>Удалить новость</button>
                        </div>
                    </div>
            )
        })}
        </>
    ) 

}
export default CardList
