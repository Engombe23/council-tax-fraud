import React, {useState, useEffect} from 'react';
import './pages.css';
import axios from 'axios';

function Learning() {
  const [isLoading, setIsLoading] = useState(false);
  const [educationLinks, setEducationLinks] = useState([]);

  const getEducationLinks = async() => {
    try {
      setIsLoading(true);
      const res = await axios.get('/api/education');
      setEducationLinks(res.data);
      setIsLoading(false);
    } catch(error){
      console.error(error);
    }
  } 

  useEffect(() => {
    getEducationLinks();
  }, []);

  return (
    <div>
      <section>
        <h1>Learning Links</h1>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
            {educationLinks.map((learningLink) => {
              return (
                <p><a href={learningLink.link}>{learningLink.title}</a></p>
              )
            })}
          </>
        )}
      </section>
    </div>
  )
}

export default Learning
