import React,{useState} from 'react';
import './Rating.css';
const Rating = () => 
{
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value) => 
  {
    setRating(value);
  };

  return (
    <body>
    <div className='rating-container'>
    
      <h2>Rate this page</h2>
      <div className="rating-stars">
        {['1','2','3','4','5'].map((value) => (
          <span
            key={value}
            className={`star ${value <= rating ? 'selected' : ''}`}
            onClick={() => handleRatingChange(value)}>

            ★
            
          </span>
            
          
        )
        )
        }
      </div>
      <p>Your rating: {rating}</p>
      <div>
        <br></br>
        <br></br>
        <centre>
     <h1>Feedback</h1>
     </centre>
     <br></br>
     <br></br>
     <textarea placeholder='share your feedback' rows={20} cols={50}></textarea>
     <br></br>
     <br></br>
     <button>Submit</button>
      </div>
      </div>
      </body>
    );
  }


  export default Rating;
