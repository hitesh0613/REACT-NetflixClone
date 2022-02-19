import React from 'react'
import Banner from './Banner';
import Nav from './Nav';
import requests from './Request';
import Row from './Row';



function Homescreen() {
    return (
<div className='app'>
    
    <Nav />
    <Banner />
  
    <Row  title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
    <Row  title="Trending" fetchUrl={requests.fetchTrending}  />
    <Row  title="TopRated" fetchUrl={requests.fetchTopRated }/>
    <Row  title="ActionMovies" fetchUrl={requests.fetchActionMovies}/>
    <Row  title="ComedyMovies" fetchUrl={requests.fetchComedyMovies}/>
    <Row  title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies}/>
    <Row  title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies}/>
    <Row  title="Documantaries" fetchUrl={requests.fetchDocumantaries}/>
  </div>

         
        
    )
}

export default Homescreen
