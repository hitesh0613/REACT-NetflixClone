import React ,{useState,useEffect} from 'react'
import axios from './axios';
import requests from './Request';
import './Banner.css'

function Banner() {
    const [movie, setmovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get(requests.fetchNetflixOriginals);
            setmovie(
                req.data.results[
                    Math.floor(Math.random() * req.data.results.length - 1)
                ]
            ); 
            return req;
        }
        fetchData();

    }, []);
    console.log(movie)

    const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};

    return (
        <header className="banner" 
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`
        }}
        
        >
            <div className="banner_content">
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_buttons">
                    <button className="banner_button">play</button>
                    <button className="banner_button">mylist</button>
                </div>

                <h1 className='banner_desp'> {truncate(movie?.overview,170)}</h1>

            </div>

            <div className="banner_fade" />

        </header>
    )
}

export default Banner
