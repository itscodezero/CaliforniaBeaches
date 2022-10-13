import React from 'react'
import styled from 'styled-components'

export default function Spinner() {
  return (
    
    <Section id='loading'>
        <h1>  Loading Please Wait ...</h1> <br/>
        <div id='loading'></div>
    </Section>
  )
}

const Section = styled.section `

h1 {
    padding-top: 2rem;
}
#loading {
  display: inline-block;
  text-align:center;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(0,0,0,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
`;
