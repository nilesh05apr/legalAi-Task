import React from 'react'
import home from '../media/home.jpg';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div>
    <Card className="bg-dark text-white">
      <Card.Img src={home} alt="homepage" />
      <Card.ImgOverlay>
        <Card.Title>CASE</Card.Title>
        <Card.Title>RESOLUTION</Card.Title>
        <Card.Title>PLATFORM</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
    </div>
  )
}

export default Home
