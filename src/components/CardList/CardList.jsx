import React, { useEffect } from 'react'
// import {mockObject} from '../../mockData'
// import { useState } from 'react';
import './CardList.css';
import {useSelector, useDispatch} from 'react-redux';
import { handleBtnColor, handleQuantityCard, fetchCards } from '../../store/cardSlice';

const CardList = () => {
    const cardList = useSelector(state => state.cards.cardList)
    const {status, error} = useSelector(state => state.cards)
    const dispatch = useDispatch()
    const changeColor = (cardId) => dispatch(handleBtnColor(cardId))
    const changeQuantity = (cardId) => dispatch(handleQuantityCard(cardId))
    
    useEffect(() => {
        if(!cardList.length) {
            dispatch(fetchCards())
        }
    }, [dispatch, cardList.length])
    return (
        <>
            { status === 'pending' && <span className="loader"></span>} 
            { error === 'rejected' && <h1>К сожалению что-то пошло не так</h1>} 
            { status === 'fulfilled' && cardList.map(object => {
            return(
                    <div className='card' key={object.id} >
                        <button className='card__linkBtn'><a href={object.url} rel="noopener noreferrer">ПЕРЕЙТИ К ИСТОЧНИКУ</a></button>
                        <h2 className='card_title'>{object.title}</h2>
                        <section className='card__section'>{object.description}</section>
                        {object.image === 'None'
                        ? null
                        : <div className='card__picture'> 
                             <img src={object.image} alt='' title='место картинки'></img> 
                        </div> }
                       
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
        })
    }
        </>
    ) 
}
export default CardList;
