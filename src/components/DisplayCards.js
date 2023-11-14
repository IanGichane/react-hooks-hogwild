import React from 'react'
const DisplayCards = () => {
    console.log(hogs)
    return (
      <>
        {hogs.map((hog, index) => (
          <div key={index}>
            {hog.name} 
             
              
          
          </div>
        ))}
      </>
    );
}

export default DisplayCards