var Profile = ({profile}) => (
  <div>
    <img className="responsive-img" src={`${profile.image}`}/>
    <span className="left">{profile.name}, {profile.age}</span>
    <span className="right">{profile.distance} miles away</span>
    <hr className="separator"/>
    <a className="left waves-effect waves-light btn-large red"><i className="material-icons left">not_interested</i>no</a>
    <a className="right waves-effect waves-light btn-large"><i className="material-icons left">done</i>yes</a>
  </div>
);






// TODO: refactor later to use webpack
window.Profile = Profile;