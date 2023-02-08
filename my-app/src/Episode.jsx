import React from "react";

const Episode = ({ episode }) => {
    return (
        <div className='episode'>
            <div>
                <p>{episode.name}</p>
                <p>{episode.episode}</p>
                <p>{episode.air_date}</p>
            </div>
        </div>
    )
}

export default Episode;