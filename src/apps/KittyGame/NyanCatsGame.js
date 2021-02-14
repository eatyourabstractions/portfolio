import React,{useEffect} from 'react'
import styled from 'styled-components'

function NyanCatsGame() {
    useEffect(() =>{
        window.scrollTo(0, 0)
        document.body.style.overflow = "hidden"
        return () => {
            document.body.style.overflow = "scroll"
          }
    },[])

    return (
    <Wrapper>
        <iframe 
        width='100%'
        height='100%'
        frameBorder="0"
        src="http://localhost:31415/nyan.html"
        /> 
    </Wrapper>
    )
    
}

export default NyanCatsGame

const Wrapper = styled.div`
    height:100vh;
    width:100vw;
`;
