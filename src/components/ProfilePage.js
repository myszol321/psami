import React from 'react'
import foto from '../images/foto.png'
import data from '../data'
import Event from './Event'

export default function ProfilePage() {

    const events = data.map(entry => {
        return(
            <Event
                key={entry.id}
                {...entry}
            />
        )
    })

    return (
        <div className="profile">
            <img className="profile--photo" src={foto} alt=""/>
            <div className="profile--info">
                <h1 className="profile--info--name">Imię i nazwisko</h1>
                <p className="profile--info--description">wiek, miasto</p>   
            </div>
            <div className="profile--rating">
                <div className="profile--rating--stars">
                    <input type="radio" id="star5" name="rate" value="5" />
                    <label for="star5" title="text">5 stars</label>
                    <input type="radio" id="star4" name="rate" value="4" />
                    <label for="star4" title="text">4 stars</label>
                    <input type="radio" id="star3" name="rate" value="3" />
                    <label for="star3" title="text">3 stars</label>
                    <input type="radio" id="star2" name="rate" value="2" />
                    <label for="star2" title="text">2 stars</label>
                    <input type="radio" id="star1" name="rate" value="1" />
                    <label for="star1" title="text">1 star</label>
                </div>
                <p className="profile--rating--number">ocenka</p>
            </div>
            
            <p className="profile--description">
                info o sb info o sb info o sb info o sb info o sb 
                info o sb info o sb info o sb info o sb info o sb 
                info o sb info o sb info o sb info o sb info o sb 
                info o sb info o sb info o sb info o sb info o sb 
                info o sb info o sb info o sb info o sb info o sb 
            </p>
            
            <div className="profile--gear">
                <h2>Posiadany sprzęt:</h2>
                <ul>
                    <li>lina</li>
                    <li>lina</li>
                    <li>lina</li>
                    <li>lina</li>
                </ul>
            </div>
            
            <div className="profile--events">
                <h2>Utworzone wydarzenia</h2>
                <div className="profile--events--event">
                    {events}
                </div>
            </div>
        </div>
    )
}