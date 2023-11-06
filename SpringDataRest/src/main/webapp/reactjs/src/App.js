import React from 'react';
import './App.css';
import {Col, Container, Row} from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavigationBar from '../src/Components/NavigationBar';
import Bienvenue from '../src/Components/Bienvenue';
import Footer from '../src/Components/Footer';
import Voiture from '../src/Components/Voiture';
import VoitureListe from '../src/Components/VoitureListe';

function App() {
    const marginTop = {marginTop:"20px"};

    return (
        <Router>
          <NavigationBar/>
          <Container>
            <Row>
                <Col lg={12} style = {marginTop} >
                    <Routes>
                        <Route path="/" exact element={<Bienvenue/>}/>
                        <Route path="/add" exact element={<Voiture/>}/>
                        <Route path="/edit/:id" exact element={<Voiture/>}/>
                        <Route path="/list" exact element={<VoitureListe/>}/>
                    </Routes>
                </Col>
            </Row>
          </Container>
            <Footer/>
        </Router>
    );
}
export default App;