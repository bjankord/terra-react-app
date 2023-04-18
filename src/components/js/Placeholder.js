import React from 'react';
import Placeholder from 'react-bootstrap/Placeholder';

function AnimationExample() {
  return (
    <>
      
      <Placeholder as="p" animation="wave">
        <Placeholder className="w-75" style={{borderRadius:'20px'}} /> 
      </Placeholder>
      <Placeholder as="p" animation="wave" >
        <Placeholder xs={12} style={{borderRadius:'20px'}}/> 
      </Placeholder>
      <Placeholder as="p" animation="glow">
        <Placeholder xs={6} style={{borderRadius:'20px'}}/>
      </Placeholder>
    </>
  );
}

export default AnimationExample;