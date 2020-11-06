import React, { Component } from 'react';
import styles from './Home.module.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { CardDeck } from 'reactstrap';
import CloudCircleIcon from '@material-ui/icons/CloudCircle';
import DuoIcon from '@material-ui/icons/Duo';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';
import SportsRugbySharpIcon from '@material-ui/icons/SportsRugbySharp';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import {Row,Image} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


 

class  Home extends  Component {
  render() {
    return (
      <div className={styles.mainContainer}>

          {/* <---Card Section--> */}
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

  <CardDeck>
  <Card border="light" style={{ width: '6rem',marginLeft:'60px' }}>
    <Card.Header>-Our Clients</Card.Header>
    <Card.Body>
      
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card style={{ height: '6rem'}}>
    
    <Card.Body>
     
      <Card.Text>
      <AssignmentIndIcon/>
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card style={{ height: '6rem'}}>
    
    <Card.Body>
     
      <Card.Text>
      <AssignmentIndIcon/>
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card style={{ height: '5rem',marginRight:'60px'}}>
    
    <Card.Body>
      
      <Card.Text>
      <AssignmentIndIcon/>
      </Card.Text>
    </Card.Body>
   
  </Card>
    
</CardDeck>


<CardDeck>
<Card border="light" >
    <Card.Header></Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
      
      </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{marginTop:'-4rem',height:'6rem'}}>
    
    <Card.Body>
      
      <Card.Text>
      <AssignmentIndIcon/>
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card style={{marginTop:'-4rem',height:'6rem'}}>
  
    <Card.Body>
     
      <Card.Text>
      <AssignmentIndIcon/>
      </Card.Text>
    </Card.Body>
   
  </Card>
  <Card style={{marginTop:'-4rem',marginRight:'40px',height:'6rem'}}>
    <Card.Img  />
    <Card.Body  >
    
      <Card.Text>
      <AssignmentIndIcon/>
      </Card.Text>
    </Card.Body>
    
  </Card>
    
</CardDeck>


  
   
  <CardDeck>
  
  <Card style={{ width: '10rem',height:'15rem', padding:'3rem',marginLeft:'60px'}}>
  
  
      <a style={{textAlign:"center"}}><BuildSharpIcon/></a> 
    <Card.Title style={{textAlign:'center'}}>  Web Design</Card.Title>
    <Card.Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </Card.Text>
   
  
</Card>

<Card style={{ width: '10rem',height:'15rem', padding:'3rem'}}>
<a style={{textAlign:"center"}}><SportsRugbySharpIcon/></a>
    <Card.Title style={{textAlign:'center'}}>Simplification</Card.Title>
    <Card.Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </Card.Text>
    
  
</Card>
<Card style={{ width: '18rem',height:'15rem',padding:'3rem' }}>
<a style={{textAlign:"center"}}><CloudCircleIcon/></a>
    <Card.Title style={{textAlign:'center'}}>Marketing </Card.Title>
    <Card.Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </Card.Text>
   
  
</Card>
<Card style={{ width: '18rem',height:'15rem', padding:'3rem',marginRight:'60px' }}>
  
  
    
<a style={{textAlign:"center"}}><DuoIcon/></a>
    <Card.Title style={{textAlign:'center'}}> Branding</Card.Title>
    <Card.Text>
    Lorem Ipsum is simply dummy text of the printing and typesetting industry
    </Card.Text>
   
  
</Card>

  </CardDeck>
  
<div className={styles.footer}></div>
  <p className={styles.footer}>Proin Ornane,nec various,augue sodales massa,in commodo nisi diam a lacus?</p>
  <p className={styles.footer}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

  <Button variant="dark" className={styles.Button}>Lets Work Together</Button>
      </div>
      
    )
  }
}
export default Home;



