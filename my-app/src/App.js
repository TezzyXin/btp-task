import {useState, useEffect} from 'react';
import './styles.css'
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
        <nav className='navbar_top'>
            <div className='navbar__container'>
                <h2>LOREM IPSUM</h2>
            </div>
        </nav>
    
        <div className='container'>
            <div className='left_side'>
                <div className='main_text'>
                    <span className='text1'>Episodes of the <b>4th</b> </span>
                    <span className='text1'> season of the series </span>
                    <span className='text2'>Rick and Morty</span>
                </div>
                <img className='image' src={require('./image.png')} alt="Rick&Morty" />
            </div>
            <div>
                {episodes.map((episode) => {
                    return(
                        <Episode episode={episode}/>
                    );
                })}
            </div>
        </div>

        <nav className='navbar_bottom'>
            <div className='navbar__container'>
                <p
                    style={{
                        fontSize: '16px',
                        color: 'white',
                    }}
                >
                    LOREM IPSUM ©2023
                </p>
            </div>
        </nav>
    </div>
    );

}

export default App;