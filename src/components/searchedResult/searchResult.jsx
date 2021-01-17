import React, { useState, useEffect } from 'react';
import '../searchedResult/search-result.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Alert } from 'react-bootstrap';
import VotePage from '../votePage/votePage';
import useLocalStorage from '../assets/localstorage';

const SearchResult = ({ movies })=>{
    const data = movies.Search;

    const [page, setPage] = useState('search');
    const [votes, setVotes] = useLocalStorage('localItem', []);

    //adding votes to state through useLocalStorage to persist data

    const addVote = (movie) =>{
        if(votes.length < 5){
            setVotes([...votes, movie]);
            window.location.reload();
        }
        if(votes.length == 5){
            alert('you have reached your maximum vote of 5')
        }
    }

    
    const RenderSearchResult = () =>(
        data && data.map((movie, index) => {
            return <Col xs={12} md={6} lg={3} key={index}>
                        <div className="poster-placeholder">
                            <img src={movie.Poster} alt="" className="poster"/>
                            <div className="overlay">
                                <button onClick={() => addVote(movie)}>Nominate</button>
                            </div>
                        </div>
                        <div className="movie-details">
                            <p className="title">{movie.Title}</p>
                            <p className="release-year">Release Year: {movie.Year}</p>
                        </div>
            </Col>
    })
    )

    return(
        <div className="search-result"> 
            <div className="container">
                
                {
                    page === 'search' && <div className="render">
                        <Row>
                            {RenderSearchResult()}
                        </Row>
                        <VotePage votes={votes}/>
                    </div>
                }
                  
            </div>
        </div>
    )
}

export default SearchResult;