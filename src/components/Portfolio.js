import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
import WorkDay from '../assets/workdayscheduler.png';
import Weather from '../assets/weather.png';
import Note from "../assets/localhost_3001_notes.png";
import ListGroup from 'react-bootstrap/ListGroup';
import {
  MDBBtn,}
from 'mdb-react-ui-kit';
import '../App.css';

// the listings will display here!
// this is a 3 equal section grid;  the yardd cards will stack equally across.
function MyYards() {
  return (
    <div> 
    <MDBRow>
      <MDBCol md='4'>
      <Card style={{ width: '18rem'}}>
      <a href="https://alexozy.github.io/work-scheduler/"> <Card.Img variant="top" src= {WorkDay} /> </a>
      <Card.Body>
        <Card.Title>Work Day Scheduler App </Card.Title>
        <Card.Text>
        We were tasked with creating a Scheduler that would allow storing user input into the web's 
        local storage, running current/local time, and also unique color styling to different time-blocks. 
        We utilized JQuery, Momentjs, and Bootstrap to make this process straight forward!       
        Click image to view Live!
        </Card.Text>
      </Card.Body>
    </Card>
      </MDBCol>
      <MDBCol md='4'>
      <Card style={{ width: '18rem' }}>
      <a href= "https://alexozy.github.io/dashboard_weather/"> <Card.Img variant="top" src={Weather} /> </a>
      <Card.Body>
        <Card.Title>Weather Dashboard</Card.Title>
        <Card.Text>
        For this application, we were tasked with creating an interactive dashboard that can display a weather 
        forecast for any city a user may type into the search-bar! We utilized a custom API key
        and the 5 Day Weather Forecast to retrieve weather data.
       
        Click image to view Live!
        </Card.Text>
      </Card.Body>
      
    </Card>
      </MDBCol>
      <MDBCol md='4'>
      <Card style={{ width: '18rem' }}>
      <a href="https://mighty-refuge-42947.herokuapp.com/"> <Card.Img variant="top" src={Note}/></a>
      <Card.Body>
        <Card.Title>Note-Taker App</Card.Title>
        <Card.Text>
        This project highlights the use of Express.js to build an application where a user can write and save notes! 
        Starter code was provided for front-end functionality; 
        students were tasked to build routes to connect front-end and back-end and submit a working application!
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>City</ListGroup.Item>
             </ListGroup>
    </Card>
      </MDBCol>
    </MDBRow>

{/* second row */}

   


    </div>

    
    
  );
}

export default MyYards;
