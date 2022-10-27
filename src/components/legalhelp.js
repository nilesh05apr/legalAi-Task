import React from 'react'
import travel from '../media/flying-plane.png';
import tenant from '../media/tenant.png';
import traffic from '../media/traffic-lights.png';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Legalhelp() {
  return (
    <div className='text-center mt-4 mb-4'>
      <h1 className='text-center'>LEGAL AREAS</h1>
      <CardGroup class='text-center d-flex justify-content-around mt-4 mb-4' style={{ display: 'flex'}}>
      <Card style={{ width: '12rem', margin:"4em", border:'solid black', float:'left'}}>
      <Card.Img variant="top" src={travel} class="rounded mx-auto d-block mt-4 mb-4" alt='tourism' />
      <Card.Body>
        <Card.Title>TOURISM LAW</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem', margin:"4em", border:'solid black' }}>
      <Card.Img variant="top" src={tenant} alt='tenat-law' class="rounded mx-auto d-block mt-4 mb-4"  />
      <Card.Body>
        <Card.Title>TENACY LAW</Card.Title>
      </Card.Body>
    </Card>
    <Card style={{ width: '12rem', margin:"4em", border:'solid black', float:'right' }}>
      <Card.Img variant="top" src={traffic} alt='traffic-law' class="rounded mx-auto d-block mt-4 mb-4" />
      <Card.Body>
        <Card.Title>TRAFFIC LAW</Card.Title>
      </Card.Body>
    </Card>
    </CardGroup>

    <div class='text-center'>
        <button class='btn btn-success'>GET LEGAL HELP</button>
    </div>
    </div>
  )
}

export default Legalhelp
