import React from 'react';

const Searchbox=({searchfield,searchchange})=>{

	return (<div className='pa2'>
	 <input type='search'
	 className='pa3 ma3 bg-light-blue' 
     onChange={searchchange}
	 placeholder='Search robots'/>
      </div>
	 );
		   
		   
}

export default Searchbox;