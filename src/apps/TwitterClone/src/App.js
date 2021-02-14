import React, {useContext} from "react";
import styled from 'styled-components';
import {useRouteMatch, Switch, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Bookmarks from './components/Bookmarks';
import Notifications from './components/Notifications';
import HomeFeed from './components/HomeFeed';
import Profile from './components/Profile'
import TweetDetails from './components/TweetDetails';

import {CurrentUserContext} from './components/CurrentUserContext';


const Layout = styled.div`
  display: flex;
  
`;

const App = () => {
  let { path, url } = useRouteMatch();
  const {status} = useContext(CurrentUserContext);
  const isLoading = status === 'idle';
  return (
    <>
    { isLoading ? (
  <Layout>
    
      <Sidebar/>
      <Switch>
      <Route exact  path={path}>
                <HomeFeed/>
            </Route>
            <Route path={`${path}/notifications`}>
                <Notifications />
            </Route>
            <Route path={`${path}/bookmarks`}>
                <Bookmarks />
            </Route>
            <Route path={`${path}/tweet/:tweetId`}>
                <TweetDetails />
            </Route>
            <Route path={`${path}/:profileId`}>
                <Profile />
            </Route>
      </Switch>
   
  </Layout>
    ) : (
      <div style={{
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center'
      }}>Loading</div>
    )
}
</>
  )
  
};

export default App;
