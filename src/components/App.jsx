import React from 'react';
import Profile from './Profile.jsx';
import MessageList from './MessageList.jsx';
import exampleProfileData from '../data/exampleData';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

var App = () => (
  <MuiThemeProvider>
    <div className="row center-xs">
      <div className="row col-xs-8">
        <div className="start-xs col-xs-8">
          <Profile profile={exampleProfileData[0]}/>
        </div>
        <div className="start-xs col-xs-4">
          <MessageList messages={exampleMessageData}/>
        </div>
      </div>
    </div>
  </MuiThemeProvider>
);


export default App;