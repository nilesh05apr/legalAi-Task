import React from 'react'
import teamM from '../media/male.png'
import teamF from '../media/female.png'
import account from '../media/account.png'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Team() {
  return (
    <div className='text-center mt-4 mb-4 '>
      <h1 className='text-center py-4'>MEET THE TEAM</h1>
      <div class='d-flex justify-content-around'>
      <CardGroup class='text-center d-flex justify-content-around mt-4 mb-4' style={{ display: 'flex'}}>
        <Card style={{ width: '12rem', margin:"4em", border:'2px solid black', float:'left', borderRadius:'50%'}}>
            <Card.Img src={teamF}   thumbnail alt='team' class="d-block rounded"/>
        </Card>
        <Card style={{ width: '12rem', margin:"4em", border:'2px solid black', float:'left', borderRadius:'50%'}}>
            <Card.Img src={teamM}   thumbnail alt='team' class="d-block rounded"/>
        </Card>
      </CardGroup>
      </div>
      <div class='d-flex justify-content-around mt-4 mb-4'>
      <CardGroup class='text-center d-flex justify-content-around mt-4 mb-4' style={{ display: 'flex'}}>
        <Card style={{ width: '12rem', margin:"4em", border:'solid black', float:'left'}}>
            <Card.Img src={account}   thumbnail alt='team' class="d-block "/>
        </Card>
        <Card style={{ width: '12rem', margin:"4em", border:'solid black', float:'left'}}>
            <Card.Img src={account}   thumbnail alt='team' class="d-block "/>
        </Card>
        <Card style={{ width: '12rem', margin:"4em", border:'solid black', float:'left'}}>
            <Card.Img src={account}   thumbnail alt='team' class="d-block "/>
        </Card>
        <Card style={{ width: '12rem', margin:"4em", border:'solid black', float:'left'}}>
            <Card.Img src={account}   thumbnail alt='team' class="d-block "/>
        </Card>
        <Card style={{ width: '12rem', margin:"4em", border:'solid black', float:'left'}}>
            <Card.Img src={account}   thumbnail alt='team' class="d-block "/>
        </Card>
      </CardGroup>
      </div>
    </div>
  )
}
export default Team;