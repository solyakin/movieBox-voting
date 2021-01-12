import React from 'react';
import {Col, Row} from 'react-bootstrap';
import '../votePage/votePage.css';

const VotePage = ({ votes }) =>{
    console.log(votes);
    return(
        <div className="vote-page">
            <h1>Nominees</h1>
            <Row>
            {
                 votes && votes.map((vote, index) => {
                    return <Col xs={12} md={6} lg={4} key={index}>
                            <div className="card-body text-center" >
                                <img src={vote.Poster} alt=""/>
                                <div className="nominee-details">
                                    <p className="title">{vote.Title}</p>
                                    <p className="release-year">Release Year: {vote.Year}</p>
                                    <button className="remove-btn">Remove</button>
                                </div>
                                
                            </div>
                    </Col>
            })
            }
            </Row>
        </div>
    )
};
export default VotePage;

