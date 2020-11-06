


import React, { Component } from 'react';
import styles from './Blog.module.css';
import Carousel from 'react-bootstrap/Carousel';

 class Blog extends Component {
    render() {
        return (
            <div>
                <div className={styles.mainContainer}>
        <h2>We are <a  style={{ color: '#34e1eb' }}>Simplex,</a> a digital agency</h2>
          <p>We design,develope and deliver beautiful and mobile Application</p>
          <div className={styles.Image}></div>
                <Carousel style={{ margin: '2rem' }}>
                <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://static.toiimg.com/photo/72975551.cms"
      alt="First slide"
    height="400px" />
    <Carousel.Caption>
    <h3>SIMPLEX is RESONSIVE</h3>
      <p>YOUR SITE WELL AUTOMATICALLY ADIUST ITS LAYOUT ON VARIOUS DEVICE</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
      alt="Third slide" height="400px"
    />

    <Carousel.Caption>
    <h3>SIMPLEX is RESONCIVE</h3>
      <p>YOUR SITE WELL AUTOMATICALLY ADIUST ITS LAYOUT ON VARIOUS DEVICE</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://www.adobe.com/content/dam/cc/us/en/products/creativecloud/stock/stock-riverflow1-720x522.jpg.img.jpg" height="400px"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>SIMPLEX is RESONCIVE</h3>
      <p>YOUR SITE WELL AUTOMATICALLY ADIUST ITS LAYOUT ON VARIOUS DEVICE.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>
            </div>
        )
    }
}
export default Blog;
