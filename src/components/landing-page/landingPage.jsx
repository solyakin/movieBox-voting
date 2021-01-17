import React, { useState, useRef } from 'react';
import '../landing-page/landingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';
import bgOne from '../assets/bg1.jpg';
import bgTwo from '../assets/bg2.jpg';
import bgFour from '../assets/bg4.jpg';
import SearchResult from '../searchedResult/searchResult';
import Footer from '../footer/footer';

SwiperCore.use([Autoplay]);

const LandingPage = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);

    const handleClick =(event)=>{
       
        event.preventDefault();
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=20126369&s=${search}`)
        .then(res => res.json())
        .then(results => {
            setMovies(results)}
            )
        setSearch('')
    }

    return(
        <div className="homepage">
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">MovieeBox</Navbar.Brand>
                    <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    </Nav>
                </Navbar>
            </header>
            <div className="hero">
                <Swiper centeredSlides={true}
                loop= 'true'
                pagination= {{
                  el: '.swiper-pagination',
                  clickable: true,
                }}
                autoplay={{
                    delay: 5000
                }}
                >
                    <SwiperSlide><img src={bgOne} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={bgFour} alt=""/></SwiperSlide>
                    <SwiperSlide><img src={bgTwo} alt=""/></SwiperSlide>
                </Swiper>
                <div className="form-container">
                    <div className="form">
                        <h2>FIND AND NOMINATE 5 OF YOUR FAVOURITE <span className="word-style">MOVIES</span></h2>
                        <input autoComplete='on' onChange={event => setSearch(event.target.value)}  type="text" placeholder="Quick find your favourite movie"/>
                        <button onClick={handleClick}>search Movie</button>
                    </div>
                </div>
                
            </div>
            <SearchResult movies={movies}/>
            <Footer/>
        
        </div>
    )
}
export default LandingPage;