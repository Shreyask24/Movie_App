import React from 'react'
import useFetch from '../customHooks/useFetch'
import { useNavigate } from 'react-router';

const Details = () => {
    const navigate = useNavigate();

    const data = useFetch("https://api.tvmaze.com/search/shows?q=all");


    return (
        <div className='Card'>
            {data != "" && data.map((item) => {
                return (
                    <div key={item.show.id} className='movies'>
                        <h1>{item.show.name}</h1>
                        <div className='paragraph'>
                            <p> <b> About The Movie: </b><br /> {item.show.summary}</p>
                            <p> <b> Language:</b> {item.show.language} </p>
                            <p> <b> Day & Time:</b> {item.show.schedule.days} {item.show.schedule.time} </p>
                            <p> <b>Status: </b>{item.show.status} {item.show.ended}</p>
                            <p> <b> Type: </b> {item.show.type}</p>
                            <p> <b> Genres:</b> {item.show.genres[0]}, {item.show.genres[1]}</p>

                        </div>
                        <button onClick={() =>
                            navigate("/home")
                        } className='details-btn'>Book Tickets</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Details