import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check out these EPIC Destinations!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem 
                        src='images/sutjeska.jpg' 
                        text='Explore the nature all around
                        the Bosnia and Herzegovina'
                        label='Adventure'
                        path='/services'
                        />
                        <CardItem 
                        src='images/cevapi.jpg' 
                        text='Explore the best food of Balkans in Bosnia and Herzegovina'
                        label='Gourmandism'
                        path='/services'
                        />
                    </ul>
            <ul className='cards__items'>
                <CardItem
                src='images/history.jpg'
                text='Get familiar with history of Bosnia and Herzegovina'
                label='History'
                path='/services'
                />
                <CardItem
                src='images/bosanski cilim.jpg'
                text='Experience events in Bosnia and Herzegovina'
                label='Events'
                path='/products'
                />
                <CardItem
                src='images/dinarica.jpg'
                text='Climb through the Montains of our beautiful Bosnia and Herzegovina'
                label='Adrenaline'
                path='/sign-up'
                />
            </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;