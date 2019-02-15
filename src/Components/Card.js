import React from 'react';

const Card=({name,email,id})=>{

	return(
         <div className='bg-light-blue br3 dib pa3 ma3 tc grow bw2 shadow-5'>
          <img alt='images' src={`https://robohash.org/${id}?200x200'`}/>
           <div>
                <h2>{name}</h2>
                <p>{email}</p>
           </div>
         </div>
		)
	}
export default Card;