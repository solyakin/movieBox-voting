import React, { useState } from 'react';
import '../searchedResult/search-result.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';
import VotePage from '../votePage/votePage';
import { useRef } from 'react';
// import { Link } from 'react-router-dom';

const SearchResult = ({ movies })=>{
    let btnRef = useRef();
    const data = movies.Search;
    // console.log(data);
    const viewVotes = 'viewVotes';


    const [page, setPage] = useState('search')
    const [votes, setVotes] = useState([]);

    //adding votes to state and local storage to persist data
    const addVote = (movie) =>{
        console.log(btnRef.current)
        let localData = localStorage.setItem('localItem', JSON.stringify([...votes, movie]));
        setVotes([...votes, movie]);
        btnRef.current.disabled = true;
    }

    const RenderSearchResult = () =>(
        data && data.map((movie, index) => {
            return <Col xs={12} md={6} lg={3} key={index}>
                {/* <div className="card"> */}
                    <div className="card-body text-center" >
                        <div className="poster-placeholder">
                            <img src={movie.Poster} alt="" className="poster"/>
                            <div className="overlay">
                                <button ref={btnRef} onClick={() => addVote(movie)}>nominate</button>
                            </div>
                        </div>
                        <div className="movie-details">
                            <p className="title">{movie.Title}</p>
                            <p className="release-year">Release Year: {movie.Year}</p>
                        </div>
                    </div>
                {/* </div> */}
            </Col>
    })
    )
    
    const handleVotes = (nextPage) => (
        setPage(nextPage)
    )

    const RenderVotes = () => {
        <h1 className="head">hello</h1>
    }
    return(
        <div className="search-result"> 
            <div className="container">
                <Row>
                    {
                       page === 'search' && (RenderSearchResult())
                    }
                </Row>
                    <VotePage votes={votes}/>
                
               {/* <Link to='/votes'>
                <button >view all votes</button>
               </Link> */}
                
            </div>
        </div>
    )
}

export default SearchResult;
