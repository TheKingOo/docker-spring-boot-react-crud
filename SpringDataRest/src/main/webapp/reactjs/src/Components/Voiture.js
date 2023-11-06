import React, {Component} from 'react';
import {Card, Form, Button, Row} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlusSquare, faSave, faUndo} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import MyToast from "./myToast";
export default class Voiture extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.voitureChange = this.voitureChange.bind(this);
        this.submitVoiture = this.submitVoiture.bind(this);
    }

    initialState={marque: '', modele: '', couleur: '', immatricule:'',annee: '', prix: ''}
    resetVoiture =()=>{
        this.setState(()=>this.initialState);
    }
    submitVoiture=event =>{
        event.preventDefault();
        const voiture={
            marque:this.state.marque,
            modele:this.state.modele,
            couleur:this.state.couleur,
            immatricule:this.state.immatricule,
            annee:this.state.annee,
            prix:this.state.prix,
        };
        axios.post("http://localhost:9090/voitures" , voiture)
            .then(response =>{
                if(response.data !=null){
                    this.setState(this.initialState);
                    this.setState({"show":true}); setTimeout(() =>
                        this.setState({"show":false}), 3000);
                }
            });
    }
    voitureChange = event =>{
        this.setState({[event.target.name]:event.target.value } ) ;
    }
    render() {

        return (
            <div>
            <div style={{"display":this.state.show ? "block" : "none"}}>
                <MyToast children = {{show:this.state.show, message:"Voiture enregistrée avec succès.", type:"success"}}/>
            </div>
            <Card className={"border border-dark bg-dark text-white"}>
                <Card.Header><FontAwesomeIcon icon={faPlusSquare}/>  Ajouter Voiture</Card.Header>

                    <Form onReset={this.resetVoiture} onSubmit={this.submitVoiture} id="VoitureFormId">
                        <Card.Body>
                            <Row>
                                <Form.Group as={Col} controlId="formGridMarque">
                                    <Form.Label> Marque </Form.Label>
                                     <Form.Control required name="marque" type="test" className={"bg-dark text-white"} value = {this.state.marque} autoComplete="off" onChange ={this.voitureChange} placeholder= "Entrez Marque Voiture"/>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridMarque">
                                    <Form.Label> Modele </Form.Label>
                                    <Form.Control name="modele" type="test" className={"bg-dark text-white"}  value = {this.state.modele} onChange ={this.voitureChange} placeholder="Entrez Modele Voiture"/>
                                </Form.Group>
                            <Form.Group as={Col} controlId="formGridMarque">
                                <Form.Label> Couleur </Form.Label>
                                <Form.Control required name="couleur" type="test" className={"bg-dark text-white"}  value = {this.state.couleur} onChange ={this.voitureChange} placeholder="Entrez Couleur Voiture"/>
                            </Form.Group>
                                <Form.Group as={Col} controlId="formGridMarque">
                                    <Form.Label>Immatricule </Form.Label>
                                    <Form.Control required name="immatricule" type="test" className={"bg-dark text-white"}  value = {this.state.immatricule} onChange ={this.voitureChange} placeholder="Entrez Immatricule Voiture"/>
                                </Form.Group>
                            <Form.Group as={Col} controlId="formGridMarque">
                                <Form.Label> Prix </Form.Label>
                                <Form.Control required name="prix" type="test" className={"bg-dark text-white"}  value = {this.state.prix} onChange ={this.voitureChange} placeholder="Entrez Prix Voiture"/>
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridMarque">
                            <Form.Label> Annee </Form.Label>
                            <Form.Control name="annee" type="test" className={"bg-dark text-white"}  value = {this.state.annee} onChange ={this.voitureChange} placeholder="Entrez Annee Voiture"/>
                        </Form.Group>
                            </Row>
                        </Card.Body>
                        <Card.Footer style={{"textAlign":"right"}}>
                            <Button size="sm" variant="success" type="submit"><FontAwesomeIcon icon={faSave}/>  Submit </Button>{' '}
                            <Button size="sm" variant="info" type="reset"><FontAwesomeIcon icon={faUndo}/>  Reset </Button>
                    </Card.Footer>
                    </Form>
            </Card>
            </div>
        );

    }}
