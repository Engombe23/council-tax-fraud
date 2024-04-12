import React, {useEffect, useState} from 'react'
import './pages.css';
import axios from 'axios';

function Links() {
  const [isLoading, setIsLoading] = useState(false);
  const [keyLinks, setKeyLinks] = useState([]);
  const [generalLinks, setGeneralLinks] = useState([]);
  const [documents, setDocuments] = useState([]);

  const getKeyLinks = async() => {
    try {
      setIsLoading(true);
      const res = await axios.get('/api/keylinks');
      setKeyLinks(res.data);
      setIsLoading(false);
    } catch(error){
      console.error(error);
    }
  }

  const getGeneralLinks = async() => {
    try {
      setIsLoading(true);
      const res = await axios.get('/api/generallinks');
      setGeneralLinks(res.data);
      setIsLoading(false);
    } catch(error){
      console.error(error);
    }
  }

  const getDocuments = async() => {
    try {
      setIsLoading(true);
      const res = await axios.get('/api/documents/upload');
      setDocuments(res.data);
      setIsLoading(false);
    } catch(error){
      console.error(error);
    }
  }



  useEffect(() => {
    getKeyLinks();
    getGeneralLinks();
    getDocuments();
  }, []);

  return (
    <div>
      <section>
        <h1>Links to Acts</h1>
        <p>The following list details all Acts that have been violated and therefore crimes that have been committed by employees of the council and debt collection agencies or bailiffs.<br>
        </br>Links have been provided for your convenience.
        </p>
        <br></br>
      </section>
      <hr className='line'></hr>
      <h1>Links</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {keyLinks.map((keylink) => {
              return (
                <>
                  <p>{keylink.title}</p>
                  <a href={keylink.link}>{keylink.altText}</a>
                </>
              )
            })}
          </> 
        )}
        <hr className='line'></hr>
        <h1>General</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {generalLinks.map((generallink) => {
              return (
                <li><a href={generallink.link}>{generallink.title}</a></li>
              )
            })}
          </>
        )}
        <hr className='line'></hr>
        <h1>Documents To Download</h1> 
    </div>
  )
}

export default Links;