import React,{useState} from 'react'
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Sudoku from '../apps/react-sudoku/src/components/Sudoku';
import DBTC from '../apps/DBTC/src/components/App';
// import TwitterClone from '../apps/TwitterClone/src/TwitterClone';
import NyanCatsGame from '../apps/KittyGame/NyanCatsGame'


function Main() {
    const [sidebar, setSidebar] = useState(true);
    const showSidebar = () => {
       
        setSidebar(!sidebar)
    };
    return (
        <Router>
            <div style={navStyles(sidebar)}>
                <Wrapper>
                    
                        <Link to='/'>
                            <Item onClick={() => showSidebar()}>
                                <h1>Home</h1>
                            </Item>
                        </Link>
                       <Link to='/sudoku'>
                            <Item onClick={() => showSidebar()}>
                                <h1>react sudoku app</h1>
                            </Item>
                       </Link>
                       <Link to='/dbtc'>
                            <Item onClick={() => showSidebar()}>
                                <h1>Don't break the chain</h1>
                            </Item>
                       </Link>
                    
                       <Link to='/kitty-game'>
                            <Item onClick={() => showSidebar()}>
                                <h1>Kitty arrow Game</h1>
                            </Item>
                       </Link>
                       
                    
                </Wrapper>
                <Link to='/'>
                    <BackToMain onClick={() => showSidebar()}>
                        <p>hello there</p>
                    </BackToMain>
                </Link>
            
            <div>
                <Switch>
                    <Wrapper>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route  path='/sudoku'>
                            <Sudoku/>
                        </Route>
                        <Route  path='/dbtc'>
                            <DBTC/>
                        </Route>
 
                        <Route  path='/kitty-game'>
                            <NyanCatsGame/>
                        </Route>
                    </Wrapper>
                </Switch>
            </div>
            </div>
        </Router>
    )
}

export default Main

const navStyles = (isActive) => {
    const [leftValue, milliSecs] = isActive
      ? ["0%", "350ms"]
      : ["-100%", "350ms"];
  
    return {
      marginTop: "0px",
      display:'flex',
      position: "absolute",
      top: "0",
      left: `${leftValue}`,
      marginLeft: "0px",
      transition: `${milliSecs}`,
      overflow:'scroll'
      
    };
  };

const BackToMain = styled.div`
    width: 200px;
    height: 100px;
    background-color: lightseagreen;
    position: fixed;
    top: 650px;
    left: 65px;
    z-index: 10;
   
`


const Wrapper = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction: column;
    background-color: lightgray;
    width: 100vw; 
    z-index:100;
`;

const Item = styled.div`
    width: 800px;
    height: 200px;
    background-color: salmon;
    margin: 20px;
`;

function Home() {
    return (
      <div>
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }