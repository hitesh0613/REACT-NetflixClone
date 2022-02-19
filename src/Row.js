import React,{useState,useEffect} from 'react'
import axios from './axios';
import './Row.css'
import YouTube from "react-youtube"
import movieTrailer from "movie-trailer"
// import requests from './request';

const base_url="https://image.tmdb.org/t/p/original/"

function Row({title,fetchUrl,isLargeRow}) {
    const [movie, setmovie] = useState([]);
    const [TrailerUrl, setTrailerUrl] = useState("")

    useEffect(()=>{
        async function fetchData(){
            const request =await axios.get(fetchUrl);
            setmovie(request.data.results);
            return request;
        }
        fetchData();

    },[fetchUrl])
    // console.table(movie)

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };


      const handelClick=(moviee)=>{
          if(TrailerUrl){
              setTrailerUrl("");
          }else{
              movieTrailer(moviee?.name || "")
              .then((url)=>{
                  const urlpara = new URLSearchParams( new URL(url).search);
                 setTrailerUrl(  urlpara.get('v'));

              }).catch((error)=> console.log(error));
            
          }

      }


    return (
        
        <div className="row">
            <h1>{title}</h1>

            <div className="row__posters">
                {movie.map(moviee =>(
                    
                    <img key={moviee.id} 
                    onClick={()=>handelClick(moviee
                        )}
                    className={`row__poster ${isLargeRow && "row__postersLarge"}`} src={`${base_url}${isLargeRow ? moviee.poster_path:moviee.backdrop_path}`}
                     alt={moviee.name}/>
                ))}


            </div>
           { TrailerUrl && <YouTube videoId={TrailerUrl} opts={opts} />   }
        </div>
    )
}

export default Row
