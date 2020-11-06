import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import { CardDeck } from 'reactstrap';
import styles from './Features.module.css';

export default class Features extends Component {
    render() {
        return (
            <div>
              <CardDeck>

<Card border="light" style={{ width: '18rem',marginTop:'50px',marginLeft:'60px'}}>
    <Card.Header>-Featured Work</Card.Header>
    <Card.Body>
     
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>

    <div className={styles.card}>
          <Card style={{ width: '15rem', display:'inline-block' }}>
  <Card.Img variant="top" style={{ height: '10rem' }}src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F886/production/_113122636_mediaitem113122632.jpg" />
  <Card.Body>
    <Card.Title>Maxicon Coke</Card.Title>
    <Card.Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </Card.Text>
  
  </Card.Body>
</Card>

<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1549849171-09f62448709e?ixlib=rb-1.2.1&w=1000&q=80" />
  <Card.Body>
    <Card.Title>The Land Within</Card.Title>
    <Card.Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </Card.Text>
   
  </Card.Body>
</Card>

<Card style={{ width: '15rem' }}>
  <Card.Img variant="top" src="https://cdn.vox-cdn.com/thumbor/1lkbiwsmSbovu-HAyjWeZTcGQo8=/0x0:1920x1280/1200x800/filters:focal(807x487:1113x793)/cdn.vox-cdn.com/uploads/chorus_image/image/57340051/apples_2811968_1920.0.jpg" />
  <Card.Body>
    <Card.Title>Apples 2 Apples</Card.Title>
    <Card.Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </Card.Text>
    
  </Card.Body>
</Card>

</div> 

  </CardDeck>
            </div>
        )
    }
}
