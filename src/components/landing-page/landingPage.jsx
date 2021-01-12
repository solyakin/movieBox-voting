import React, { useState } from 'react';
import '../landing-page/landingPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form,FormControl } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Autoplay} from 'swiper';
import 'swiper/swiper-bundle.css';
import bgOne from '../assets/bg1.jpg';
import bgTwo from '../assets/bg2.jpg';
// import bgThree from '../assets/bg3.jpg';
import bgFour from '../assets/bg4.jpg';
import SearchResult from '../searchedResult/searchResult';
SwiperCore.use([Autoplay]);

const LandingPage = () => {
    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    
    const handleClick =(event)=>{
        event.preventDefault();
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=20126369&s=${search}`)
        .then(res => res.json())
        .then(allMovies => {
            setMovies(allMovies)}
            );
    }

    return(
        <div className="homepage">
            <header>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home">The shoppies</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    </Nav>
                    <Form inline>
                    <FormControl onChange={event => setSearch(event.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
                    <Button onClick={handleClick} variant="outline-info">Search Movie</Button>
                    </Form>
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
                        <h2>VOTE 5 OF YOUR FAVOURITE <span className="word-style">MOVIE</span></h2>
                        <input type="text" placeholder="Quick find your favourite movie"/>
                        <button>search Movie</button>
                    </div>
                </div>
                
            </div>
            <SearchResult movies={movies}/>
        </div>
    )
}
export default LandingPage;