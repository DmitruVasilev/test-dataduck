import React from 'react';
import macbook from './macbook.png';
import iphone from './iphone.png';
import "./ImageBlock.sass";

const ImageBock = () => (
  <section className='image-block'>
    <img className='image-block__macbook' src={macbook} alt="macbook" />
    <img className='image-block__iphone' src={iphone} alt="iphone" />
  </section>
)

export default ImageBock
