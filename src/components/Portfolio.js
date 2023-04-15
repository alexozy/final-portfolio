import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Card from 'react-bootstrap/Card';
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
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Typical_suburban_backyard.jpg/220px-Typical_suburban_backyard.jpg" />
      <Card.Body>
        <Card.Title>Work Day Scheduler App </Card.Title>
        <Card.Text>
         This is a quick description of the yard.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>City</ListGroup.Item>
             </ListGroup>
    </Card>
      </MDBCol>
      <MDBCol md='4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Typical_suburban_backyard.jpg/220px-Typical_suburban_backyard.jpg" />
      <Card.Body>
        <Card.Title>Weather Dashboard</Card.Title>
        <Card.Text>
         This is a quick description of the yard.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>City</ListGroup.Item>
      </ListGroup>
    </Card>
      </MDBCol>
      <MDBCol md='4'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Typical_suburban_backyard.jpg/220px-Typical_suburban_backyard.jpg" />
      <Card.Body>
        <Card.Title>Project 3</Card.Title>
        <Card.Text>
         This is a quick description of the yard.
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
