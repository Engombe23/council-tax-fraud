import React from 'react'
import './pages.css';
import video from '../assets/Council tax Fraud all parts.mp4';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <section>
        <h1>Council Tax is FRAUD</h1>
        <p>Check out the video to be aware of the scam</p>
        <video src={video} width={800} controls/>
      </section>
      
      <section>
      <hr className='line'></hr>
        <h2>There have been 26 ACTS that have been violated and a further TEN Acts currently violated by the Employees of the Council</h2>
        <h3 style={{marginTop: '20px'}}>There is no LAWFUL Obligation to pay for Council Tax</h3>
        <h4 style={{marginTop: '20px'}}>Click on the button below to see the full list</h4>
        <Link to={"/legislation"}><Button style={{width: '120px', height: '50px'}}>Click here</Button></Link>
      </section>
    </div>
  )
}

export default Home