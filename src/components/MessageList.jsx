// import MessageListItem from './MessageListItem.jsx';

import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';

var MessageList = ({messages}) => (
  <List>
    <Subheader>Messages: 28, 7 new</Subheader> {/* TODO: make dynamic */}
    <ListItem
      leftAvatar={<Avatar className="avatar" src={messages[0].image} />}
      /*primaryText="Brunch this weekend?"*/
      secondaryText={
        <p>
          <span style={{color: darkBlack}}>{messages[0].name}</span> --
          {' ' + messages[0].messages[0]}
        </p>
      }
      secondaryTextLines={2}
    />
    <Divider inset={true} />
    <ListItem
      leftAvatar={<Avatar className="avatar" src={messages[0].image} />}
      /*primaryText={
        <p className="messageTitle">Summer BBQ&nbsp;&nbsp;<span style={{color: lightBlack}}>4</span></p>
      }*/
      secondaryText={
        <p>
          <span style={{color: darkBlack}}>{messages[0].name}</span> --
          {' ' + messages[1].messages[0]}
        </p>
      }
      secondaryTextLines={2}
    />
    <Divider inset={true} />
  </List>
);

export default MessageList;