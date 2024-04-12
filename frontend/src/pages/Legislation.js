import React, {useEffect, useState} from 'react'
import './pages.css';
import axios from 'axios';

function Legislation() {

  const [isLoading, setIsLoading] = useState(false);
  const [laws, setLaws] = useState([]);
  const [acts, setActs] = useState([]);

  const getLaws = async() => {
    try {
      setIsLoading(true);
      const res = await axios.get('/api/legislation');
      setLaws(res.data);
      setIsLoading(false);
    } catch(error){
      console.error(error);
    }
  }

  const getActs = async() => {
    try {
      setIsLoading(true);
      const res = await axios.get('/api/acts');
      setActs(res.data);
      setIsLoading(false);
    } catch(error){
      console.error(error);
    }
  } 

  useEffect(() => {
    getLaws();
  }, []);

  useEffect(() => {
    getActs();
  }, []);

  return (
    <div>
      <section>
        <h1>Legislation</h1>
        {isLoading ? (
          <p>Loading...</p>
        ): (
          <>
            {laws.map((law) => {
              return (
              <>
                <p>{law.title}</p>
                <a href={law.link}>{law.link}</a>
              </>
              )
          })}
          </>
        )}
        <hr className='line'></hr>
        <h1>Current List of Acts Violated by the Employees of the Council</h1>
        {isLoading ? (
          <p>Loading...</p>
        ): (
          <>
            {acts.map((act) => {
              return (
                <p>{act.title}</p>
              )
           })}
          </>
        )}
      </section>
    </div>
  )
}

export default Legislation
