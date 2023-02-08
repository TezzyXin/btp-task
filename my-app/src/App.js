import {useState, useEffect} from 'react';

import Episode from './Episode';

const App = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/episode/32,33,34,35,36,37,38,39,40,41`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setEpisodes(data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    }, []);

    return (
    <div className='app'>
        <h1>Episodes of the 4th season of the series Rick and Morty</h1>
        <div className='container'>
            {episodes.map((episode) => {
                return(
                    <Episode episode={episode}/>
                );
            })}
        </div>
    </div>
    );

}

export default App;