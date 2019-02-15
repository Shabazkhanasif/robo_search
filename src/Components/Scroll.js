import React from 'react';

const Scroll=(props)=>{
	return(
         <div style={{overflow:'scroll', height:'400px', border:'2px solid #536B60'}}>
         {props.children}
         </div>
		)

}

export default Scroll;