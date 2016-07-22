import React from 'react';
import Profile from './Profile.jsx';
import MessageList from './MessageList.jsx';
import exampleProfileData from '../data/exampleData';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var App = () => (
  <MuiThemeProvider>
    <div className="row center-lg">
      <div className="col-lg-5">
        <Profile profile={exampleProfileData[0]}/>
      </div>
      <div className="col-lg-7">
        <MessageList messages={exampleMessageData}/>
      </div>
    </div>
  </MuiThemeProvider>
);


export default App;