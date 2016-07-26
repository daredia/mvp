// import MessageListItem from './MessageListItem.jsx';

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

var MessageList = ({messages}) => {
  var newMessageCount = messages.filter(function(message) {
    return message.new;
  }).length;
  var newMessageString = newMessageCount + ' new message';
  newMessageString = newMessageCount > 1 ? newMessageString + 's' : newMessageString;

  return (
    <List>
      <Subheader style={{color: darkBlack}}>
        {newMessageString} | {messages.length} total
      </Subheader> 
      
      {messages.map(function(message) {
        return (
          <div key={message.id}>
            <ListItem
              leftAvatar={<Avatar className="avatar" src={message.image} />}
              /*primaryText="Brunch this weekend?"*/
              secondaryText={
                <p>
                  <span style={{color: darkBlack}}>{message.name}</span> --
                  {' ' + message.messages[0]}
                </p>
              }
              secondaryTextLines={2}
            />
            <Divider inset={true} />
          </div>
        );
      })}
      
    </List>
  );
};

export default MessageList;