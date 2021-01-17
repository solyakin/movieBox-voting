import {React, useState} from 'react';
import {Col, Row, Alert} from 'react-bootstrap';
import useLocalStorage from '../assets/localstorage';
import '../votePage/votePage.css';

const VotePage = ({ votes }) =>{
    const [newVotes, setnewVotes] = useLocalStorage('localItem', votes);
    const [showAlert, setShowAlert] = useState(false);
    
    const removeVote = (vote) => {
        setnewVotes(newVotes.filter(finalVoteList => finalVoteList !== vote))
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
            }, 2000);
    }

    return(
        <div className="vote-page">
            <h1>Nominees <span>({newVotes.length})</span></h1>
            <div className={`${showAlert ? 'alert-shown' : 'alert-hidden'}`}>
                <p>One movie removed successfully!</p>
            </div>
            <Row>
            {
                 newVotes && newVotes.map((vote, index) => {
                    return <Col xs={12} md={6} lg={4} key={index}>
                            <div className="card-body text-center" >
                                <img src={vote.Poster} alt=""/>
                                <div className="nominee-details">
                                    <p className="title">{vote.Title}</p>
                                    <p className="release-year">Release Year: {vote.Year}</p>
                                    <button onClick={() => removeVote(vote)}
                                     className="remove-btn">
                                         Remove</button>
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

    