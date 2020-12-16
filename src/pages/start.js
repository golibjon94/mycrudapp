import React, { Component } from 'react'
import Call from '../call';
import Button from '@material-ui/core/Button';
import { Container, Input } from '@material-ui/core';
export class Start extends Component {
    constructor(props) {
        super(props)   
        this.state = {
             username: "",    //Initial value of username
             start: false    //If user can go to dashboard
        }
        this.startGame = this.startGame.bind(this)
    }

    //Update Username when user types in the input field
    setUsername = (event) => {
        this.setState ({
            username: event.target.value
        })
    }

    //Check the user has entered a value in the username field
    startGame(){ 
        if(this.state.username !== ""){
            this.setState({
                start: true
            })
        }
    }    

    render() {
        //Load the Game Dashboard component if start is true
        const{start}= this.state
        if(start === true){
            return (
                <Container>
                     <Call username={this.state.username}></Call>
                </Container>
            )
        }
        
        return (
            <div>
            
            <Container className="container">  
             <div className="home">            
                <h1 className="mytext">Ro'yxatlar bilan tanishish uchun kiring</h1><br />
                <h3 className="mytext2">Boshlash uchun foydalanuvchi nomingizni kiriting</h3> <br />
                
                <Input type='text' onChange={this.setUsername} value={this.state.username} />
                <br />
                <Button variant="contained" color="secondary"
                className="button" disabled={this.state.username.length < 1}
                 onClick={this.startGame}>
                     KIRISH
                </Button>
            </div>
            </Container>
            </div>
        )
    }
}
export default Start
