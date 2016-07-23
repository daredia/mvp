import React from 'react';
import Avatar from 'material-ui/Avatar';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

var Profile = ({profile}) => (
  <Card>
    <CardHeader
      title={`${profile.name}, ${profile.age}`}
      subtitle={`Seen ${profile.seen} | ${profile.distance} miles away`}
      avatar={
        <Avatar
          className="avatar"
          src={`${profile.image}`}
        />
      }
    />
    <CardMedia
      overlay={<CardTitle title={`"${profile.bio.quote}"`} subtitle="" />}
    >
      <img src={`${profile.image}`} />
    </CardMedia>
    {/*<CardTitle title="Card title" subtitle="Card subtitle" />*/}
    <CardText>
      <p>Hometown: {profile.bio.hometown}<br/>Occupation: {profile.bio.occupation}</p>
      <p>{profile.bio.text}</p>
    </CardText>
    <CardActions>
      <RaisedButton 
        label="no" 
        secondary={true} 
        icon={<FontIcon className="material-icons">not_interested</FontIcon>} 
      />
      <RaisedButton 
        label="yes" 
        primary={true} 
        icon={<FontIcon className="material-icons">done</FontIcon>} 
      />
    </CardActions>
  </Card>
);

export default Profile;