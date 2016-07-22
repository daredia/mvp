// var Profile = ({profile}) => (
//   <div>
//     <img className="responsive-img" src={`${profile.image}`}/>
//     <span className="left">{profile.name}, {profile.age}</span>
//     <span className="right">{profile.distance} miles away</span>
//     <hr className="separator"/>
//     <a className="left waves-effect waves-light btn-large red"><i className="material-icons left">not_interested</i>no</a>
//     <a className="right waves-effect waves-light btn-large"><i className="material-icons left">done</i>yes</a>
//   </div>
// );

import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

var Profile = ({profile}) => (
  <Card>
    <CardHeader
      title="URL Avatar"
      subtitle="Subtitle"
      avatar="http://lorempixel.com/100/100/nature/"
    />
    <CardMedia
      overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
    >
      <img src="http://lorempixel.com/600/337/nature/" />
    </CardMedia>
    <CardTitle title="Card title" subtitle="Card subtitle" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
      <FlatButton label="Action1" />
      <FlatButton label="Action2" />
    </CardActions>
  </Card>
);




export default Profile;